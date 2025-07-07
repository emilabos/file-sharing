import React, { useState, useRef } from "react";
import { FolderIcon, PlusIcon } from "./Icons";

interface DropZoneProps {
  onFilesSelected: (files: FileList) => void;
  disabled?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFilesSelected,
  disabled = false,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled) return;
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFilesSelected(files);
    }
  };

  const handleFileSelect = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const files = e.target.files;
    if (files && files.length > 0) {
      onFilesSelected(files);
    }
  };

  return (
    <div
      className={`
        relative rounded-xl p-12 text-center min-h-[200px] 
        flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          disabled
            ? "bg-gray-100 border-2 border-dashed border-gray-200 cursor-not-allowed opacity-60"
            : `bg-gray-50 border-2 border-dashed cursor-pointer ${
                isDragOver
                  ? "bg-blue-50 border-primary-blue"
                  : "border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              }`
        }
      `}
      onDragOver={disabled ? undefined : handleDragOver}
      onDragLeave={disabled ? undefined : handleDragLeave}
      onDrop={disabled ? undefined : handleDrop}
      onClick={disabled ? undefined : handleFileSelect}
    >
      {/* Icon Container */}
      <div className="relative mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #4285F4 0%, #6FA8F5 100%)",
            boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
          }}
        >
          <FolderIcon className="w-8 h-8 text-white" />
        </div>

        {/* Plus Icon */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
          <PlusIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <p
          className={`text-lg font-medium ${
            disabled ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {disabled ? "File already selected" : "Drag and drop a file here"}
        </p>
        {!disabled && (
          <p className="text-gray-500 text-sm">
            or{" "}
            <span className="text-primary-blue underline hover:text-primary-blueDark cursor-pointer">
              browse files
            </span>
          </p>
        )}
        {!disabled && (
          <p className="text-gray-400 text-xs mt-2">Maximum file size: 100MB</p>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.jpg,.jpeg,.png,.gif,.bmp,.svg,.webp,.txt,.md,.rtf,.csv,.mp4,.avi,.mov,.wmv,.flv,.webm,.mkv,.zip,.rar,.7z,.tar,.gz"
        className="hidden"
        onChange={handleFileInputChange}
        disabled={disabled}
      />
    </div>
  );
};
