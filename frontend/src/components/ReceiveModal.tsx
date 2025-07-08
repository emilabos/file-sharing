import React, { useState } from "react";
import { CloseIcon } from "./Icons";
import { ShinyText } from "./ShinyText";

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RetrievedFile {
  fileName: string;
  fileType: string;
  fileSize: number;
  fileBlob: string;
  uploadTime: string;
}

export const ReceiveModal: React.FC<ReceiveModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [retrievedFile, setRetrievedFile] = useState<RetrievedFile | null>(
    null
  );
  const [error, setError] = useState<string>("");
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multi-character input
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move to previous input when backspacing an empty input
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shareCode = code.join("");

    // Validate code
    if (shareCode.length !== 6) {
      setError("Please enter a complete 6-digit code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5153/api/share/retrieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: parseInt(shareCode) }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            "File not found. Please check your code and try again."
          );
        }
        throw new Error("Failed to retrieve file");
      }

      const fileData = await response.json();
      setRetrievedFile(fileData);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while retrieving the file."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!retrievedFile) return;

    try {
      // Convert base64 to binary
      const binaryString = atob(retrievedFile.fileBlob);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Create blob with proper MIME type
      const blob = new Blob([bytes], { type: retrievedFile.fileType });
      const url = URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement("a");
      link.href = url;
      link.download = retrievedFile.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
      setError("An error occurred while downloading the file.");
    }
  };

  const handleClose = () => {
    setCode(Array(6).fill(""));
    setIsLoading(false);
    setRetrievedFile(null);
    setError("");
    onClose();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (!isOpen) return null;

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
              <ShinyText
                text="Receive File"
                className="text-2xl font-semibold"
              />
            </h1>
            <p className="text-gray-500 text-sm">
              Enter the 6-digit share code to receive the file
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        {!retrievedFile ? (
          /* Code Input Section */
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <div className="flex justify-center items-center space-x-2 mb-6">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-12 border-2 border-gray-300 rounded-lg text-center text-2xl font-mono font-bold text-gray-800 focus:border-primary-blue focus:outline-none"
                    maxLength={1}
                    disabled={isLoading}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? "Retrieving..." : "Receive File"}
              </button>
            </div>
          </form>
        ) : (
          /* File Retrieved Section */
          <div className="mb-8">
            {/* File Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                File Retrieved
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Name:</span>{" "}
                  {retrievedFile.fileName}
                </div>
                <div>
                  <span className="font-medium">Size:</span>{" "}
                  {formatFileSize(retrievedFile.fileSize)}
                </div>
                <div>
                  <span className="font-medium">Type:</span>{" "}
                  {retrievedFile.fileType}
                </div>
                <div>
                  <span className="font-medium">Uploaded:</span>{" "}
                  {new Date(retrievedFile.uploadTime).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-success-green to-green-500 hover:from-green-600 hover:to-success-green text-white shadow-lg shadow-success-green/30 hover:shadow-xl hover:shadow-success-green/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Download File
            </button>

            {/* Start Over Button */}
            <button
              onClick={() => {
                setRetrievedFile(null);
                setCode(Array(6).fill(""));
                setError("");
              }}
              className="w-full mt-3 py-2 px-4 rounded-lg font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Retrieve Another File
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
