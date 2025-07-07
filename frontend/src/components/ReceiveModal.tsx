import React, { useState } from "react";
import { CloseIcon } from "./Icons";
import { ShinyText } from "./ShinyText";

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReceiveModal: React.FC<ReceiveModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the logic to fetch the file
    // For now, just log the code
    console.log("Attempting to receive file with code:", code.join(""));
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
            onClick={onClose}
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

        {/* Code Input Section */}
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
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Receive File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
