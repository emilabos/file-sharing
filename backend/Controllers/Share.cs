using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Share : ControllerBase
    {
        Random R = new Random();
        private static readonly List<dataModel> datas = new();
        private static int nextId = 1;

        [HttpPost]
        public IActionResult Add([FromBody] dataModel data)
        {
            data.Id = nextId++;
            data.Code = generateCode();
            datas.Add(data);
            return Ok(data.Code);
        }

        [HttpGet("{code}")]
        public IActionResult GetByCode(int code)
        {
            dataModel data = datas.FirstOrDefault(x => x.Code == code);
            if (data == null)
                return NotFound();

            return Ok(data);
        }

        public int GenerateCode()
        {
            int code = 0;
            bool run = true;
            int[] nums = datas.Select(x => x.Code).ToArray();
            while (run)
            {
                run = false;
                code = R.Next(100000, 999999);
                Array.ForEach(nums, x =>
                {
                    if (x == code) run = true;
                });
            }
            return code;
        }
    }
}
