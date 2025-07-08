using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Newtonsoft.Json;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Share : ControllerBase
    {
        Random R = new Random();
        private static readonly List<dataModel> datas = new();
        private static int nextId = 1;
        private static readonly string DataFilePath = "uploads.json";

        [HttpPost("upload")]
        public IActionResult UploadFile([FromBody] FileUploadRequest request)
        {
            try
            {
                if (request == null || string.IsNullOrEmpty(request.FileBlob))
                {
                    return BadRequest("Invalid file data");
                }

                var data = new dataModel
                {
                    Id = nextId++,
                    Code = GenerateCode(),
                    FileName = request.FileName,
                    FileType = request.FileType,
                    FileSize = request.FileSize,
                    FileBlob = request.FileBlob,
                    UploadTime = DateTime.Now
                };

                datas.Add(data);

                SaveDataToFile();

                return Ok(new { code = data.Code });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error uploading file: {ex.Message}");
            }
        }

        [HttpPost("retrieve")]
        public IActionResult RetrieveFile([FromBody] FileRetrieveRequest request)
        {
            try
            {
                if (request == null || request.Code < 100000 || request.Code > 999999)
                {
                    return BadRequest("Invalid code format. Code must be a 6-digit number.");
                }

                LoadDataFromFile();
                
                var data = datas.FirstOrDefault(x => x.Code == request.Code);

                if (data == null)
                {
                    return NotFound("File not found with the provided code");
                }

                return Ok(new
                {
                    fileName = data.FileName,
                    fileType = data.FileType,
                    fileSize = data.FileSize,
                    fileBlob = data.FileBlob,
                    uploadTime = data.UploadTime
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving file: {ex.Message}");
            }
        }

        [HttpPost("legacy")]
        public IActionResult Add([FromBody] dataModel data)
        {
            data.Id = nextId++;
            data.Code = GenerateCode();
            data.UploadTime = DateTime.Now;
            datas.Add(data);

            SaveDataToFile();

            return Ok(data.Code);
        }

        [HttpGet("{code:int}")]
        public IActionResult GetByCode(int code)
        {
            LoadDataFromFile();
            
            dataModel? data = datas.FirstOrDefault(x => x.Code == code);

            if (data == null)
                return NotFound();

            return Ok(data);
        }

        private void LoadDataFromFile()
        {
            try
            {
                if (System.IO.File.Exists(DataFilePath))
                {
                    var fileContent = System.IO.File.ReadAllText(DataFilePath);
                    var loadedData = JsonConvert.DeserializeObject<List<dataModel>>(fileContent);
                    if (loadedData != null)
                    {
                        datas.Clear();
                        datas.AddRange(loadedData);
                        
                        if (datas.Any())
                        {
                            nextId = datas.Max(x => x.Id) + 1;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading data from file: {ex.Message}");
            }
        }

        private void SaveDataToFile()
        {
            try
            {
                var json = JsonConvert.SerializeObject(datas, Formatting.Indented);
                System.IO.File.WriteAllText(DataFilePath, json);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving data to file: {ex.Message}");
            }
        }

        private int GenerateCode()
        {
            LoadDataFromFile();
            
            int code = 0;
            bool run = true;
            int[] nums = datas.Select(x => x.Code).ToArray();
            
            while (run)
            {
                run = false;
                code = R.Next(100000, 999999);
                
                if (nums.Contains(code))
                {
                    run = true;
                }
            }
            
            return code;
        }
    }
}
