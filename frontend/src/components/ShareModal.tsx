import React, { useState, useEffect } from "react";
import { CloseIcon, LoadingSpinner, CheckIcon } from "./Icons";
import { type FileData } from "./FileItem";
import { ShinyText } from "./ShinyText";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: FileData | null;
}

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

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  file,
}) => {
  const [shareProgress, setShareProgress] = useState<ShareProgress>({
    step: "encrypting",
    progress: 0,
    message: shareSteps.encrypting,
  });
  const [shareLink, setShareLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && file) {
      // Reset state when modal opens
      setShareProgress({
        step: "encrypting",
        progress: 0,
        message: shareSteps.encrypting,
      });
      setShareLink("");
      setCopied(false);

      // Start the actual upload process
      uploadFileToBackend();
    }
  }, [isOpen, file]);

  const uploadFileToBackend = async () => {
    if (!file) return;

    try {
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

  const handleClose = () => {
    setShareProgress({
      step: "encrypting",
      progress: 0,
      message: shareSteps.encrypting,
    });
    setShareLink("");
    setCopied(false);
    onClose();
  };

  if (!isOpen || !file) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-md animate-fadeIn transform transition-all duration-300"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Header */}
        <div className="relative mb-8">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">
              <ShinyText text="Share File" className="text-2xl font-semibold" />
            </h1>
            <p className="text-gray-500 text-sm">{file.name}</p>
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
              <p className="text-gray-500 text-sm">{shareProgress.progress}%</p>
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
              <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
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
  );
};
