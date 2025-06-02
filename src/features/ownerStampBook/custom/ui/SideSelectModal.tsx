"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  characterType?: string;
  onSelect: (side: "front" | "back") => void;
}

export default function SideSelectModal({
  isOpen,
  setIsOpen,
  characterType = "YELLOW",
  onSelect,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] rounded-[15px] p-0 gap-0 bg-yellow-300 flex flex-col items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 모달</DialogTitle>
        </DialogHeader>
        <div className="w-[238px] h-[220px] flex flex-col gap-[30px] items-center justify-center">
          <Image
            src={`/img/character/${characterType.toLowerCase()}-all.svg`}
            alt="character"
            width={90}
            height={101}
          />
          <p className="text-md text-font-green font-bold">요소를 배치할 면을 선택해 주세요.</p>
        </div>
        <div className="w-full flex h-[50px] border-t-[1px] border-t-[#8E8E9380]">
          <button
            className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center border-r-[1px] border-r-[#8E8E9380]"
            onClick={() => onSelect("front")}>
            앞면
          </button>
          <button
            className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center"
            onClick={() => onSelect("back")}>
            뒷면
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
