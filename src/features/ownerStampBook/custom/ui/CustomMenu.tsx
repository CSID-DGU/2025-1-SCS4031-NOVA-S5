"use client";

import Image from "next/image";
import { useCustomStore } from "@/shared/store/customStore";
import TextBottomSheet from "./TextBottomSheet";

interface CustomMenuProps {
  onBackgroundColorClick: () => void;
  onBackgroundImageClick: () => void;
  onTextColorClick: () => void;
}

export default function CustomMenu({
  onBackgroundColorClick,
  onBackgroundImageClick,
  onTextColorClick,
}: CustomMenuProps) {
  const { textColor, isTextBottomSheetOpen, setIsTextBottomSheetOpen } = useCustomStore();

  return (
    <div className="w-full bg-yellow-300 px-[41px] py-[15px] flex justify-between items-center shadow-[0px_-6px_14px_0px_rgba(47,47,47,0.04)]">
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => setIsTextBottomSheetOpen(true)}>
        <Image src={"/icon/customNav/text.svg"} alt="text" width={30} height={30} />
        <p className="text-xs text-font-green font-medium">텍스트</p>
      </div>
      <div
        className="mt-1 flex flex-col items-center gap-[10px] cursor-pointer"
        onClick={onTextColorClick}>
        <button
          className="w-[23px] h-[23px] bg-green-100 rounded-[3px]"
          style={{ backgroundColor: textColor }}
        />
        <p className="text-xs text-font-green font-medium">텍스트 색상</p>
      </div>
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={onBackgroundImageClick}>
        <Image src={"/icon/image-icon.svg"} alt="text" width={30} height={30} />
        <p className="text-xs text-font-green font-medium">배경 이미지</p>
      </div>
      <div
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={onBackgroundColorClick}>
        <Image src={"/icon/customNav/background.svg"} alt="text" width={30} height={30} />
        <p className="text-xs text-font-green font-medium">배경 색상</p>
      </div>

      <TextBottomSheet
        isOpen={isTextBottomSheetOpen}
        onClose={() => setIsTextBottomSheetOpen(false)}
      />
    </div>
  );
}
