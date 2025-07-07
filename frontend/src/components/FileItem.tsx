import React from "react";
import {
  ExcelIcon,
  WordIcon,
  PowerPointIcon,
  PdfIcon,
  ImageIcon,
  TextIcon,
  VideoIcon,
  ZipIcon,
  DefaultFileIcon,
  CheckIcon,
  DeleteIcon,
  LoadingSpinner,
  ShareIcon,
} from "./Icons";

export interface FileData {
  id: string;
  name: string;
  size: string;
  type:
    | "excel"
    | "word"
    | "powerpoint"
    | "pdf"
    | "image"
    | "text"
    | "video"
    | "zip"
    | "other";
  status: "uploading" | "success" | "error";
  progress?: number;
}

interface FileItemProps {
  file: FileData;
  onDelete: (id: string) => void;
  onShare?: (file: FileData) => void;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case "excel":
      return <ExcelIcon className="w-5 h-5 text-white" />;
    case "word":
      return <WordIcon className="w-5 h-5 text-white" />;
    case "powerpoint":
      return <PowerPointIcon className="w-5 h-5 text-white" />;
    case "pdf":
      return <PdfIcon className="w-5 h-5 text-white" />;
    case "image":
      return <ImageIcon className="w-5 h-5 text-white" />;
    case "text":
      return <TextIcon className="w-5 h-5 text-white" />;
    case "video":
      return <VideoIcon className="w-5 h-5 text-white" />;
    case "zip":
      return <ZipIcon className="w-5 h-5 text-white" />;
    default:
      return <DefaultFileIcon className="w-5 h-5 text-white" />;
  }
};

const getFileIconBackground = (type: string) => {
  switch (type) {
    case "excel":
      return "bg-office-excel";
    case "word":
      return "bg-office-word";
    case "powerpoint":
      return "bg-office-powerpoint";
    case "pdf":
      return "bg-file-pdf";
    case "image":
      return "bg-file-image";
    case "text":
      return "bg-file-text";
    case "video":
      return "bg-file-video";
    case "zip":
      return "bg-file-zip";
    default:
      return "bg-file-default";
  }
};

const getContainerStyle = (status: string) => {
  switch (status) {
    case "success":
      return "border-success-green bg-success-greenBg";
    case "error":
      return "border-error-red bg-error-redBg";
    case "uploading":
      return "border-warning-yellow bg-warning-yellowBg";
    default:
      return "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "success":
      return "Upload complete";
    case "error":
      return "Upload failed";
    case "uploading":
      return "Uploading...";
    default:
      return "";
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case "success":
      return "text-success-green";
    case "error":
      return "text-error-red";
    case "uploading":
      return "text-warning-yellow";
    default:
      return "text-gray-500";
  }
};

export const FileItem: React.FC<FileItemProps> = ({
  file,
  onDelete,
  onShare,
}) => {
  return (
    <div className="animate-fadeIn">
      {/* File Item Container */}
      <div
        className={`
          bg-white border rounded-lg p-4 flex items-center justify-between 
          transition-all duration-200 ease-in-out
          ${getContainerStyle(file.status)}
        `}
      >
        {/* Left Section: Icon + File Info */}
        <div className="flex items-center space-x-3">
          {/* File Icon */}
          <div
            className={`
              w-10 h-10 rounded-md flex items-center justify-center
              ${getFileIconBackground(file.type)}
            `}
          >
            {getFileIcon(file.type)}
          </div>

          {/* File Info */}
          <div className="flex flex-col">
            <p className="text-gray-800 text-sm font-medium mb-1">
              {file.name}
            </p>
            <p className="text-gray-500 text-xs">{file.size}</p>
            {file.status !== "uploading" && (
              <p
                className={`text-xs font-medium ${getStatusTextColor(
                  file.status
                )}`}
              >
                {getStatusText(file.status)}
              </p>
            )}

            {/* Progress Bar for Uploading Files */}
            {file.status === "uploading" && (
              <div className="mt-2">
                <div className="bg-gray-200 rounded-sm h-1 w-24 overflow-hidden">
                  <div
                    className="h-full rounded-sm transition-all duration-300 ease-out"
                    style={{
                      width: `${file.progress || 0}%`,
                      background:
                        "linear-gradient(90deg, #4285F4 0%, #6FA8F5 100%)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Status/Actions */}
        <div className="flex items-center space-x-3">
          {file.status === "uploading" && (
            <>
              <span className="text-gray-500 text-xs font-medium">
                {file.progress || 0}%
              </span>
              <LoadingSpinner className="w-4 h-4" />
            </>
          )}

          {file.status === "success" && (
            <div className="w-5 h-5 bg-success-green rounded-full flex items-center justify-center">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
          )}

          {/* Delete Button */}
          <button
            onClick={() => onDelete(file.id)}
            className="w-5 h-5 text-gray-400 hover:text-error-red transition-colors duration-200"
          >
            <DeleteIcon className="w-full h-full" />
          </button>
        </div>
      </div>

      {/* Share Button - Only shown for successful uploads */}
      {file.status === "success" && onShare && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => onShare(file)}
            className="bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5 backdrop-blur-sm border border-white/20 flex items-center space-x-2"
          >
            <ShareIcon className="w-4 h-4" />
            <span>Share File</span>
          </button>
        </div>
      )}
    </div>
  );
};
