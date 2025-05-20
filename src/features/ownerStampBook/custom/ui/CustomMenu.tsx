"use client";

import Image from "next/image";
import { ChromePicker } from "react-color";
import { useState } from "react";

interface CustomMenuProps {
  onBackgroundColorChange: (color: string) => void;
}

export default function CustomMenu({ onBackgroundColorChange }: CustomMenuProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleColorChange = (color: any) => {
    setBackgroundColor(color.hex);
    onBackgroundColorChange(color.hex);
  };

  return (
    <div className="w-full bg-yellow-300 px-[41px] py-[15px] flex justify-between items-center shadow-[0px_-6px_14px_0px_rgba(47,47,47,0.04)]">
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src={"/icon/customNav/text.svg"} alt="text" width={30} height={30} />
        <p className="text-xs text-font-green font-medium">텍스트</p>
      </div>
      <div className="mt-1 flex flex-col items-center gap-[10px] cursor-pointer">
        <button className="w-[23px] h-[23px] bg-green-100 rounded-[3px]" />
        <p className="text-xs text-font-green font-medium">텍스트 색상</p>
      </div>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src={"/icon/image-icon.svg"} alt="text" width={30} height={30} />
        <p className="text-xs text-font-green font-medium">배경 이미지</p>
      </div>

      <div className="flex flex-col items-center gap-2 cursor-pointer relative">
        <Image
          src={"/icon/customNav/background.svg"}
          alt="text"
          width={30}
          height={30}
          onClick={() => setShowColorPicker(!showColorPicker)}
        />
        <p className="text-xs text-font-green font-medium">배경 색상</p>
        {showColorPicker && (
          <div className="absolute bottom-full mb-2 z-50">
            <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
            <ChromePicker color={backgroundColor} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </div>
  );
}
