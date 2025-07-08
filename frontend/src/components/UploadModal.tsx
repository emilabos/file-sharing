import React, { useState } from "react";
import { CloseIcon, LoadingSpinner, CheckIcon } from "./Icons";
import { DropZone } from "./DropZone";
import { FileList } from "./FileList";
import { type FileData } from "./FileItem";
import { ShinyText } from "./ShinyText";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalScreen = "upload" | "share";
type ShareStep = "encrypting" | "uploading" | "generating" | "complete";

interface ShareProgress {
  step: ShareStep;
  progress: number;
  message: string;
}

const shareSteps: Record<ShareStep, string> = {
  encrypting: "Encrypting your file...",
  uploading: "Uploading to secure servers...",
  generating: "Generating share code...",
  complete: "Share code generated!",
};

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
  const [currentScreen, setCurrentScreen] = useState<ModalScreen>("upload");
  const [fileToShare, setFileToShare] = useState<FileData | null>(null);
  const [shareProgress, setShareProgress] = useState<ShareProgress>({
    step: "encrypting",
    progress: 0,
    message: shareSteps.encrypting,
  });
  const [shareLink, setShareLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

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
    setFileToShare(file);
    setCurrentScreen("share");
    // Start the upload process
    uploadFileToBackend(file);
  };

  const uploadFileToBackend = async (file: FileData) => {
    if (!file) return;

    try {
      // Reset share state
      setShareProgress({
        step: "encrypting",
        progress: 0,
        message: shareSteps.encrypting,
      });
      setShareLink("");
      setCopied(false);

      // Step 1: Encrypting
      setShareProgress({
        step: "encrypting",
        progress: 20,
        message: shareSteps.encrypting,
      });

      // Convert blob to base64 (remove data URL prefix)
      const base64Data = file.blob.split(",")[1];

      // Step 2: Uploading
      setShareProgress({
        step: "uploading",
        progress: 50,
        message: shareSteps.uploading,
      });

      // Create the request payload
      const uploadRequest = {
        fileName: file.name,
        fileType: getMimeType(file.name),
        fileSize: getFileSizeInBytes(file.size),
        fileBlob: base64Data,
      };

      // Make the API call
      const response = await fetch("http://localhost:5153/api/share/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadRequest),
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      // Step 3: Generating
      setShareProgress({
        step: "generating",
        progress: 80,
        message: shareSteps.generating,
      });

      const result = await response.json();
      const shareCode = result.code.toString();

      // Step 4: Complete
      setShareLink(shareCode);
      setShareProgress({
        step: "complete",
        progress: 100,
        message: shareSteps.complete,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error - you might want to show an error state
      alert("An error occurred while sharing the file. Please try again.");
    }
  };

  // Helper function to get MIME type from file name
  const getMimeType = (fileName: string): string => {
    const extension = fileName.toLowerCase().split(".").pop();
    const mimeTypes: { [key: string]: string } = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      pdf: "application/pdf",
      txt: "text/plain",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      zip: "application/zip",
      rar: "application/x-rar-compressed",
      mp4: "video/mp4",
      avi: "video/x-msvideo",
      mov: "video/quicktime",
    };
    return mimeTypes[extension || ""] || "application/octet-stream";
  };

  // Helper function to convert formatted file size back to bytes
  const getFileSizeInBytes = (formattedSize: string): number => {
    const parts = formattedSize.split(" ");
    const size = parseFloat(parts[0]);
    const unit = parts[1];

    switch (unit) {
      case "KB":
        return Math.round(size * 1024);
      case "MB":
        return Math.round(size * 1024 * 1024);
      case "GB":
        return Math.round(size * 1024 * 1024 * 1024);
      default:
        return Math.round(size);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleBackToUpload = () => {
    setCurrentScreen("upload");
    setFileToShare(null);
    setShareProgress({
      step: "encrypting",
      progress: 0,
      message: shareSteps.encrypting,
    });
    setShareLink("");
    setCopied(false);
  };

  const handleModalClose = () => {
    setFiles([]);
    setError("");
    setCurrentScreen("upload");
    setFileToShare(null);
    setShareProgress({
      step: "encrypting",
      progress: 0,
      message: shareSteps.encrypting,
    });
    setShareLink("");
    setCopied(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-2xl w-full max-w-2xl relative overflow-hidden"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Sliding Container */}
        <div
          className={`flex transition-transform duration-300 ease-out ${
            currentScreen === "share" ? "-translate-x-1/2" : "translate-x-0"
          }`}
          style={{ width: "200%" }}
        >
          {/* Upload Screen */}
          <div className="w-1/2 flex-shrink-0 p-8">
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
                  Select or drag and drop a single file (max 100MB) to get
                  started
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

          {/* Share Screen */}
          <div className="w-1/2 flex-shrink-0 p-8">
            {/* Header */}
            <div className="relative mb-8">
              <button
                onClick={handleBackToUpload}
                className="absolute top-0 left-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleModalClose}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <CloseIcon className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-2">
                  <ShinyText
                    text="Share File"
                    className="text-2xl font-semibold"
                  />
                </h1>
                <p className="text-gray-500 text-sm">{fileToShare?.name}</p>
              </div>
            </div>

            {/* Progress Section */}
            {shareProgress.step !== "complete" ? (
              <div className="text-center mb-8">
                <div className="mb-6">
                  <LoadingSpinner className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium mb-2">
                    {shareProgress.message}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {shareProgress.progress}%
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${shareProgress.progress}%`,
                      background:
                        "linear-gradient(90deg, #4285F4 0%, #6FA8F5 100%)",
                    }}
                  />
                </div>
              </div>
            ) : (
              /* Complete Section */
              <div className="text-center mb-8">
                <div className="mb-6">
                  <video
                    autoPlay
                    muted
                    loop={false}
                    className="w-16 h-16 mx-auto mb-4"
                    onLoadedData={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.currentTime = 0;
                      video.playbackRate = 1.5;
                      video.play();
                    }}
                    onTimeUpdate={(e) => {
                      const video = e.target as HTMLVideoElement;
                      if (video.currentTime >= 2.3) {
                        video.pause();
                        video.currentTime = 2.3;
                      }
                    }}
                  >
                    <source src="/sent.webm" type="video/webm" />
                    {/* Fallback to the original green tick if video fails to load */}
                    <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto">
                      <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                  </video>
                  <p className="text-gray-700 font-medium mb-2">
                    {shareProgress.message}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Your file is ready to share
                  </p>
                </div>

                {/* Share Code */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-600 text-xs mb-2 font-medium">
                    Share Code:
                  </p>
                  <div className="flex justify-center items-center space-x-2">
                    {shareLink.split("").map((digit, index) => (
                      <div
                        key={index}
                        className="w-10 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-mono font-bold text-gray-800"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyToClipboard}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    copied
                      ? "bg-success-green text-white"
                      : "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5"
                  }`}
                  disabled={copied}
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
