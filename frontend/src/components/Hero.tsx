import React from "react";
import { ExcelIcon, PowerPointIcon } from "./Icons";

// Cursor Icon Component
const CursorIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor" />
  </svg>
);

interface HeroProps {
  onUploadClick: () => void;
  onReceiveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onUploadClick,
  onReceiveClick,
}) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200" />

      {/* Graph paper overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/graph-paper.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Background decorative blobs */}
      <div className="absolute top-[10%] right-[15%] w-24 h-24 md:w-32 md:h-32 bg-secondary-purple/8 rounded-full animate-float" />
      <div className="absolute bottom-[20%] left-[10%] w-16 h-16 md:w-20 md:h-20 bg-primary-blue/6 rounded-full animate-float-delayed" />
      <div className="absolute top-[30%] left-[20%] w-20 h-20 md:w-28 md:h-28 bg-accent-orange/5 rounded-full animate-float-slow" />
      <div className="absolute bottom-[40%] right-[25%] w-14 h-14 md:w-24 md:h-24 bg-office-excel/7 rounded-full animate-float-fast" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Title group */}
        <div className="relative flex flex-col gap-2 md:gap-1">
          {/* First line: "File" */}
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-gray-700 font-sans antialiased">
              File
            </h1>

            {/* Excel icon with glassmorphism effect */}
            <div className="absolute -top-6 -left-8 md:-top-8 md:-left-12 w-16 h-16 md:w-20 md:h-20 bg-office-excel rounded-2xl flex items-center justify-center shadow-lg shadow-office-excel/30 z-20 animate-float backdrop-blur-sm bg-office-excel/90 border border-white/20">
              <ExcelIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>

          {/* Second line: "Uploader" with special styling */}
          <div className="relative ml-6 md:ml-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-gray-700 font-sans antialiased">
              Upl
              <span className="relative inline-block transform scale-110 bg-gradient-to-r from-secondary-purple to-secondary-purpleLight bg-clip-text text-transparent animate-letter-glow mx-1">
                o
              </span>
              ader
            </h1>

            {/* PowerPoint icon with glassmorphism effect */}
            <div className="absolute top-20 -right-8 md:top-24 md:-right-12 w-12 h-12 md:w-16 md:h-16 bg-office-powerpoint rounded-xl flex items-center justify-center shadow-lg shadow-office-powerpoint/30 z-20 animate-float-delayed backdrop-blur-sm bg-office-powerpoint/90 border border-white/20">
              <PowerPointIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-8 md:mt-12 max-w-2xl leading-relaxed">
          A simple and modern file sharing tool for{" "}
          <span className="text-secondary-purple font-semibold">
            developers
          </span>{" "}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 md:mt-12 flex gap-4">
          <button
            onClick={onReceiveClick}
            className="bg-gradient-to-r from-primary-blue to-primary-blueLight hover:from-primary-blueDark hover:to-primary-blue text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 transform hover:-translate-y-1 backdrop-blur-sm border border-white/20"
          >
            Receive Files
          </button>
          <button
            onClick={onUploadClick}
            className="text-primary-blue hover:text-primary-blueLight font-semibold px-6 py-4 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Upload Files
          </button>
        </div>
      </div>
    </header>
  );
};
