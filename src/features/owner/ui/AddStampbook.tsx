"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AddStampbook() {
  return (
    <div className="relative bg-green-400 w-full h-[233px] rounded-xl">
      <div className="absolute right-0">
        <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
        <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
        <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
      </div>
      <div className="flex flex-col items-center justify-center gap-7">
        <Image src="/img/character/yellow-all.svg" alt="yellow" width={60} height={67} />
        <h1 className="font-bold text-[16px]">매장의 스탬프북을 등록해 주세요!</h1>
        <Button className="bg-font-green text-[12px] font-bold rounded-full">
          스탬프북 등록하기
        </Button>
      </div>
    </div>
  );
}
