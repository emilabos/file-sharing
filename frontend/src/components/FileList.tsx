import React from "react";
import { FileItem, type FileData } from "./FileItem";

interface FileListProps {
  files: FileData[];
  onDeleteFile: (id: string) => void;
  onShareFile?: (file: FileData) => void;
}

export const FileList: React.FC<FileListProps> = ({
  files,
  onDeleteFile,
  onShareFile,
}) => {
  if (files.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 space-y-3">
      {files.map((file) => (
        <FileItem
          key={file.id}
          file={file}
          onDelete={onDeleteFile}
          onShare={onShareFile}
        />
      ))}
    </div>
  );
};
