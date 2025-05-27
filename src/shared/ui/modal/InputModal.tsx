"use client";

import { useState } from "react";
import { useStampEditStore } from "@/shared/store/stampEditStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";

type TargetType = "front" | "back";

interface InputModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  characterType?: "YELLOW" | "ORANGE" | "BLACK" | "GREEN";
  target: TargetType;
  onNameChange?: (name: string) => void;
}

export default function InputModal({ isOpen, setIsOpen, target, onNameChange }: InputModalProps) {
  const { setFrontName, setBackName } = useStampEditStore();
  const [inputValue, setInputValue] = useState("");
  const { selectedCafe } = useSelectedCafe();
  const characterType = selectedCafe?.characterType?.toLowerCase() || "yellow";

  const handleRegister = () => {
    if (inputValue.trim() !== "") {
      if (target === "front") {
        setFrontName(inputValue);
        onNameChange?.(inputValue);
      } else {
        setBackName(inputValue);
      }
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] h-[300px] rounded-[15px] p-0 gap-0 bg-yellow-300 flex flex-col items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 모달</DialogTitle>
        </DialogHeader>
        <div className="w-[238px] h-[250px] flex flex-col gap-[30px] items-center justify-center py-[35px]">
          <p className="text-md text-font-green font-bold">매장명을 입력해 주세요.</p>
          <Image
            src={`/img/character/${characterType.toLowerCase()}-all.svg`}
            alt="character"
            width={70}
            height={79}
          />
          <Input
            className="h-[39px]"
            placeholder="더블톤"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
        <div className="w-full flex h-[50px] border-t-[1px] border-t-[#8E8E9380]">
          <button
            className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center border-r-[1px] border-r-[#8E8E9380]"
            onClick={() => setIsOpen(false)}>
            취소
          </button>
          <button
            className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center"
            onClick={handleRegister}>
            등록
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
