"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useQRStore } from "@/shared/store";

interface CancelModalProps {
  username: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BEIGE";
  type: "stamp" | "challenge" | "stampReward" | "challengeReward";
}

export function CancelModal({
  open,
  onOpenChange,
  characterType,
  username,
  type,
}: CancelModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const character = characterType.toLowerCase();
  const containerHeight = step === 2 ? "h-[296px]" : "h-[428px]";
  const { scannedUuid, reset } = useQRStore();
  console.log(scannedUuid);

  const handleGoToStep2 = () => {
    setStep(2);
  };

  const handleCancelConfirm = () => {
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    reset();
    onOpenChange(false);
  };

  const cancelType = type === "stamp" ? "스탬프" : type === "challenge" ? "챌린지" : "리워드";

  return (
    <Dialog open={open} onOpenChange={resetModal}>
      <DialogContent className="w-[300px] p-0">
        <div
          className={`transition-all duration-300 ease-in-out bg-yellow-300 rounded-lg shadow-md overflow-hidden ${containerHeight}`}>
          {step === 1 && (
            <div className="flex flex-col items-center justify-between h-full">
              <DialogHeader className="bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px] w-full h-[112px]">
                <DialogTitle className="text-center !text-base !font-[800] text-[#254434]">
                  {cancelType} 적립 취소가 필요하신가요?
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-7 justify-center items-center p-6">
                <Image
                  src={`/img/character/${character}-all.svg`}
                  alt="캐릭터"
                  width={70}
                  height={78}
                />
                <p className="text-font-green text-base font-bold text-center leading-relaxed">
                  {cancelType} 적립 취소를 진행합니다.
                </p>
              </div>
              <button
                onClick={handleGoToStep2}
                className="w-full h-[50px] border-t border-disabledfonts font-semibold text-font-green">
                다음
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col justify-between h-full">
              <div className="w-full p-6 h-full">
                <DialogHeader></DialogHeader>
                <div className="flex flex-col items-center justify-center gap-7 h-full">
                  <Image
                    src={`/img/character/${character}-all.svg`}
                    alt="캐릭터"
                    width={70}
                    height={78}
                  />
                  <p className="text-font-green font-semibold text-center">
                    1개의 {cancelType}를
                    <br />
                    적립 취소하시겠어요?
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full h-[50px] text-font-green font-semibold">
                <button
                  className="w-1/2 border-r border-t border-disabledfont"
                  onClick={resetModal}>
                  아니요
                </button>
                <button
                  className="w-1/2 border-t border-disabledfont"
                  onClick={handleCancelConfirm}>
                  네
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-between h-full">
              <DialogHeader className="bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px] w-full h-[112px]">
                <DialogTitle className="text-center !text-base !font-[800] text-[#254434]">
                  적립 취소 완료
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-7 justify-center items-center p-6">
                <Image
                  src={`/img/character/${character}-all.svg`}
                  alt="캐릭터"
                  width={70}
                  height={78}
                />
                <p className="text-font-green text-base font-bold text-center">
                  {username} 고객님의
                  <br />
                  {cancelType} 1개 적립이 취소됐어요.
                </p>
                <img src="/img/spring.svg" alt="spring" className="absolute top-[100px]" />
              </div>
              <button
                onClick={resetModal}
                className="w-full h-[50px] border-t border-disabledfonts text-font-green">
                확인
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
