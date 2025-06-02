"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  characterType?: string;
  button?: "double" | "single";
  mainText?: React.ReactNode;
  subText?: React.ReactNode;
  leftButtonText?: string;
  rightButtonText?: string;
  onRightButtonClick?: () => void;
}

export default function Modal({
  isOpen,
  setIsOpen,
  characterType = "YELLOW",
  button = "double",
  mainText,
  subText,
  leftButtonText,
  rightButtonText,
  onRightButtonClick,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] rounded-[15px] py-0 px-[10px] gap-0 bg-yellow-300 flex flex-col items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 모달</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[250px] flex flex-col gap-[30px] items-center justify-center py-[35px]">
          <Image
            src={`/img/character/${characterType.toLowerCase()}-all.svg`}
            alt="character"
            width={90}
            height={101}
          />
          <div className="flex flex-col gap-[15px] items-center justify-center">
            {mainText}
            {subText}
          </div>
        </div>
        <div className="w-full flex h-[50px] border-t-[1px] border-t-[#8E8E9380]">
          {button === "double" && (
            <>
              <button
                className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center border-r-[1px] border-r-[#8E8E9380]"
                onClick={() => setIsOpen(false)}>
                {leftButtonText}
              </button>
              <button
                className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center"
                onClick={onRightButtonClick}>
                {rightButtonText}
              </button>
            </>
          )}
          {button === "single" && (
            <button
              className="w-full h-full text-md text-font-green font-semibold flex items-center justify-center"
              onClick={() => setIsOpen(false)}>
              {rightButtonText}
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
