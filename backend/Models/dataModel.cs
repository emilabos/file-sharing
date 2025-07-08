namespace backend.Models
{
    public class dataModel
    {
        public int Id { get; set; }
        public int Code { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public long FileSize { get; set; }
        public string? FileBlob { get; set; } // Base64 encoded file data
        public DateTime UploadTime { get; set; }
    }

    public class FileUploadRequest
    {
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public long FileSize { get; set; }
        public string? FileBlob { get; set; } // Base64 encoded file data
    }

    public class FileRetrieveRequest
    {
        public int Code { get; set; }
    }
}
