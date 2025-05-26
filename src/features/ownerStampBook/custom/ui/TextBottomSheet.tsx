"use client";

import { BottomSheet } from "@/shared";
import { CheckIcon } from "lucide-react";
import { useCustomStore } from "@/shared/store/customStore";

interface TextBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TextBottomSheet({ isOpen, onClose }: TextBottomSheetProps) {
  const { selectedFont, setSelectedFont, setModalType, setIsModalOpen } = useCustomStore();

  const handleConfirm = () => {
    if (selectedFont) {
      setModalType("text");
      setIsModalOpen(true);
      onClose();
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <BottomSheet.Header>
        <div className="flex items-center justify-end gap-[15px]">
          <p className="!text-md !font-semibold text-[#25443480] cursor-pointer" onClick={onClose}>
            취소
          </p>
          <p
            className="!text-md !font-semibold text-font-green cursor-pointer"
            onClick={handleConfirm}>
            확인
          </p>
        </div>
      </BottomSheet.Header>
      <BottomSheet.Content>
        <div className="flex flex-col gap-5">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedFont("SUIT")}>
            <p className="font-suit text-md font-semibold text-font-green">SUIT</p>
            {selectedFont === "SUIT" && <CheckIcon className="text-font-green w-5 h-5" />}
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedFont("SUITE")}>
            <p className="font-suit text-md font-semibold text-font-green">SUITE</p>
            {selectedFont === "SUITE" && <CheckIcon className="text-font-green w-5 h-5" />}
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedFont("Pretendard")}>
            <p className="font-pretendard text-md font-semibold text-font-green">Pretendard</p>
            {selectedFont === "Pretendard" && <CheckIcon className="text-font-green w-5 h-5" />}
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedFont("Noto Sans")}>
            <p className="font-noto text-md font-semibold text-font-green">Noto Sans</p>
            {selectedFont === "Noto Sans" && <CheckIcon className="text-font-green w-5 h-5" />}
          </div>
        </div>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
