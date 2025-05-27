"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import InputModal from "@/shared/ui/modal/InputModal";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";
import { useStampEditStore } from "@/shared/store/stampEditStore";

export default function StampBack() {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { backName, setBackName } = useStampEditStore();
  const { selectedCafe } = useSelectedCafe();

  useEffect(() => {
    if (selectedCafe?.cafeName && !backName) {
      setBackName(selectedCafe.cafeName);
    }
  }, [selectedCafe, backName, setBackName]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (name: string) => {
    setBackName(name);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-md text-font-green font-bold">뒷면</p>
        <div
          className="w-[320px] h-[154px] rounded-[10px] flex items-center justify-center bg-[#0000004D] mx-auto"
          style={{
            backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <p className="text-[#FAFAFA] text-md font-bold">{backName}</p>
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          <Button
            className="w-[109px] rounded-full bg-green-300 text-font-green text-sm font-semibold"
            onClick={() => setIsOpen(true)}>
            매장명 바꾸기
          </Button>
          <Button
            className="w-[109px] rounded-full bg-green-300 text-font-green text-sm font-semibold"
            onClick={handleImageClick}>
            이미지 바꾸기
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <InputModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target="back"
        onNameChange={handleNameChange}
      />
    </>
  );
}
