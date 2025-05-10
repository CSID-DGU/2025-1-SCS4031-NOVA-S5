"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { stampSchema } from "../../model";
import Image from "next/image";

interface StampModalProps {
  username: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BEIGE";
  type: "stamp" | "challenge"; // 타입에 따른 적립 요청 분기 나눌예정
}

export function SaveModal({ open, onOpenChange, characterType, type, username }: StampModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [count, setCount] = useState("");

  const handleSubmit = () => {
    if (!count) return;
    const result = stampSchema.safeParse({ count });

    if (!result.success) {
      alert(result.error.errors[0].message); // 또는 에러 UI로 처리
      return;
    }
    setStep(2);
  };

  const resetModal = () => {
    setStep(1);
    setCount("");
    onOpenChange(false);
  };

  // 다이나믹 height 적용을 위한 className 계산
  const containerHeight = step === 1 ? "h-[296px]" : "h-[428px]";
  const saveType = type === "stamp" ? "스탬프" : "챌린지";
  const character = characterType.toLowerCase();
  return (
    <Dialog open={open} onOpenChange={resetModal}>
      <DialogContent className="w-[300px] p-0">
        <div
          className={`transition-all duration-300 ease-in-out bg-yellow-300 rounded-lg shadow-md overflow-hidden ${containerHeight}`}>
          {step === 1 ? (
            <div className="flex flex-col justify-between h-full">
              <div className="w-full p-6 h-full">
                <DialogHeader>
                  <DialogTitle className="text-base font-bold text-font-green">{`적립할 ${saveType} 개수를 입력해 주세요.`}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center gap-7 h-full">
                  <Image
                    src={`/img/character/${character}-all.svg`}
                    alt="캐릭터"
                    width={70}
                    height={78}
                  />
                  <Input
                    id="count"
                    value={count}
                    onChange={e => setCount(e.target.value)}
                    className="mt-2 h-[39px]"
                    placeholder="예) 2"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full h-[50px] text-font-green font-semibold">
                <button
                  className="w-1/2 border-r border-t border-disabledfont"
                  onClick={resetModal}>
                  취소
                </button>
                <button
                  className="w-1/2 border-t border-disabledfont"
                  onClick={handleSubmit}
                  disabled={!count}>
                  확인
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between h-full">
              <DialogHeader className="bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px] w-full h-[112px]">
                <DialogTitle className="text-center !text-title-medium !font-[800] text-[#254434]">
                  적립 완료!
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-7 justify-center items-center p-6">
                <Image
                  src={`/img/character/${character}-all.svg`}
                  alt="캐릭터"
                  width={70}
                  height={78}
                />
                <p className="text-font-green text-base font-bold">
                  {username} 고객님께
                  <br />
                  {saveType} {count}개 적립이 완료됐어요.
                </p>
                <img src="/img/spring.svg" alt="spring" className="absolute top-[100px]" />
              </div>
              <button
                onClick={resetModal}
                className="w-full h-[50px] border-t border-disabledfonts">
                확인
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
