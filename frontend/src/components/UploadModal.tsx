import React, { useState } from "react";
import { CloseIcon } from "./Icons";
import { DropZone } from "./DropZone";
import { FileList } from "./FileList";
import { ShareModal } from "./ShareModal";
import { type FileData } from "./FileItem";
import { ShinyText } from "./ShinyText";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper function to determine file type based on extension
const getFileType = (
  fileName: string
):
  | "excel"
  | "word"
  | "powerpoint"
  | "pdf"
  | "image"
  | "text"
  | "video"
  | "zip"
  | "other" => {
  const extension = fileName.toLowerCase().split(".").pop();
  switch (extension) {
    case "xls":
    case "xlsx":
      return "excel";
    case "doc":
    case "docx":
      return "word";
    case "ppt":
    case "pptx":
      return "powerpoint";
    case "pdf":
      return "pdf";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "bmp":
    case "svg":
    case "webp":
      return "image";
    case "txt":
    case "md":
    case "rtf":
    case "csv":
      return "text";
    case "mp4":
    case "avi":
    case "mov":
    case "wmv":
    case "flv":
    case "webm":
    case "mkv":
      return "video";
    case "zip":
    case "rar":
    case "7z":
    case "tar":
    case "gz":
      return "zip";
    default:
      return "other";
  }
};

// Helper function to format file size
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [error, setError] = useState<string>("");
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [fileToShare, setFileToShare] = useState<FileData | null>(null);

  const handleFilesSelected = (fileList: FileList) => {
    // Clear any previous errors
    setError("");

    // Check if there's already a file uploaded
    if (files.length > 0) {
      setError(
        "Only 1 file can be uploaded at a time. Please remove the current file first."
      );
      return;
    }

    // Check if more than 1 file is being selected
    if (fileList.length > 1) {
      setError(
        "Only 1 file can be uploaded at a time. Please select a single file."
      );
      return;
    }

    const file = fileList[0];
    const maxSizeInBytes = 100 * 1024 * 1024; // 100MB in bytes

    // Check file size limit
    if (file.size > maxSizeInBytes) {
      setError(
        `File size exceeds 100MB limit. Your file is ${formatFileSize(
          file.size
        )}.`
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newFile: FileData = {
        id: `${Date.now()}-${Math.random()}`,
        name: file.name,
        size: formatFileSize(file.size),
        type: getFileType(file.name),
        status: "uploading" as const,
        progress: 0,
        blob: reader.result as string,
      };

      setFiles([newFile]);
      simulateUpload(newFile.id);
    };
    reader.readAsDataURL(file);
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 10; // Random progress between 10-35% (faster)

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Randomly set success or error (90% success rate)
        const isSuccess = Math.random() > 0.1;

        setFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? {
                  ...file,
                  progress: 100,
                  status: isSuccess ? "success" : "error",
                }
              : file
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? { ...file, progress: Math.round(progress) }
              : file
          )
        );
      }
    }, 80 + Math.random() * 120); // Random interval between 80-200ms (much faster)
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
    // Clear error when file is deleted
    setError("");
  };

  const handleShareFile = async (file: FileData) => {
    try {
      const response = await fetch("http://localhost:5153/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: file.name, blob: file.blob }),
      });

      if (!response.ok) {
        throw new Error("Failed to share file");
      }

      const code = await response.text();
      alert(`Your file has been shared! Code: ${code}`);
    } catch (error) {
      console.error(error);
      alert("An error occurred while sharing the file.");
    }
  };

  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
    setFileToShare(null);
  };

  const handleModalClose = () => {
    setFiles([]);
    setError("");
    setIsShareModalOpen(false);
    setFileToShare(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-2xl animate-fadeIn"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Header */}
        <div className="relative mb-8">
          <button
            onClick={handleModalClose}
            className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-2">
              <ShinyText
                text="Upload File"
                className="text-3xl font-semibold"
              />
            </h1>
            <p className="text-gray-500 text-base">
              Select or drag and drop a single file (max 100MB) to get started
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Drop Zone */}
        <DropZone
          onFilesSelected={handleFilesSelected}
          disabled={files.length > 0}
        />

        {/* File List */}
        <FileList
          files={files}
          onDeleteFile={handleDeleteFile}
          onShareFile={handleShareFile}
        />
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleShareModalClose}
        file={fileToShare}
      />
    </div>
  );
};
