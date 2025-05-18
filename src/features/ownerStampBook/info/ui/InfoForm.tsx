"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function InfoForm() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  return (
    <form className="w-full flex flex-col gap-[28px] mt-[25px]">
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm text-font-green font-medium">* 스탬프북을 입력해 주세요.</p>
          <p className="text-xs text-[#8E8E93] font-medium">고객 님에게는 노출되지 않아요.</p>
        </div>
        <Input placeholder="스탬프북 이름" />
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm text-font-green font-medium">
            * 사장님의 카페를 한 줄로 소개해 주세요.
          </p>
          <p className="text-xs text-[#8E8E93] font-medium">고객 님에게 노출돼요.</p>
        </div>
        <Input placeholder="카페 000은 아기자기한 분위기가 매력이에요!" />
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm text-font-green font-medium">
            * 스탬프북의 컨셉을 한 줄로 소개해 주세요.
          </p>
          <p className="text-xs text-[#8E8E93] font-medium">고객 님에게 노출돼요.</p>
        </div>
        <Input placeholder="몽글몽글한 감성을 스탬프북에서 느껴보세요." />
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm text-font-green font-medium">
            * 스탬프북을 고객용 서비스에 바로 반영할까요?
          </p>
          <p className="text-xs text-[#8E8E93] font-medium">
            바로 반영하지 않으면, 서비스 내의 스탬프북 리스트에만 등록돼요.
          </p>
        </div>
        <div className="w-full flex items-center gap-5 pr-6">
          <Button
            type="button"
            className={cn(
              "w-1/2 h-[51px] border border-[#E7E8EB] rounded-[20px] text-sm font-medium",
              isVisible === true ? "bg-font-green text-white" : "bg-yellow-300 text-[#DCDCDC]"
            )}
            onClick={() => setIsVisible(true)}>
            네
          </Button>
          <Button
            type="button"
            className={cn(
              "w-1/2 h-[51px] border border-[#E7E8EB] rounded-[20px] text-sm font-medium",
              isVisible === false ? "bg-font-green text-white" : "bg-yellow-300 text-[#DCDCDC]"
            )}
            onClick={() => setIsVisible(false)}>
            아니요
          </Button>
        </div>
      </div>

      <Button className="w-full h-[50px] rounded-full bg-[#DCDCDC] mt-[25px]">
        스탬프북 등록 예시 확인하기
      </Button>
    </form>
  );
}
