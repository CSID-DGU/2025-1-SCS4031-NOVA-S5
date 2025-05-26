"use client";

import Image from "next/image";
import { XIcon } from "lucide-react";

type Props = {
  file: File | undefined;
  onFileChange: (file: File) => void;
  onRemoveFile: () => void;
};

export default function FileUploader({ file, onFileChange, onRemoveFile }: Props) {
  const getFileIcon = () => {
    if (!file) return null;
    const ext = file.name.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return "/icon/file-pdf.svg";
      case "jpg":
      case "jpeg":
        return "/icon/file-jpg.svg";
      case "png":
        return "/icon/file-png.svg";
      default:
        return "/icon/file-unknown.svg";
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {!file ? (
        <>
          <label
            htmlFor="business-license"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-[102px] bg-green-300 rounded-[8px] gap-1">
            <Image src="/icon/image-icon.svg" width={24} height={24} alt="image" />
            <p className="text-xs font-medium text-font-green">사진 첨부하기</p>
          </label>
          <input
            type="file"
            id="business-license"
            className="hidden"
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={e => {
              if (e.target.files && e.target.files[0]) {
                onFileChange(e.target.files[0]);
              }
            }}
          />
        </>
      ) : (
        <div className="w-[175px] h-[35px] flex items-center justify-between bg-green-300 px-3 py-2 rounded-[8px]">
          <div className="flex items-center gap-2">
            <Image src={getFileIcon()!} alt="file" width={24} height={24} />
            <p className="text-sm font-medium text-font-green truncate max-w-[100px]">
              {file.name}
            </p>
          </div>
          <button type="button" onClick={onRemoveFile}>
            <XIcon className="w-5 h-5 text-[#254434B2]" />
          </button>
        </div>
      )}
    </div>
  );
}
