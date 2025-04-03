"use client";

import Image from "next/image";
import yellowCharacter from "../../../../public/img/yellow-all.svg";
import orangeCharacter from "../../../../public/img/orange-all.svg";
import coffee from "../../../../public/icon/coffee.svg";
import { Progress } from "@/components/ui/progress";

const mockupData = {
  cafeName: "충무로 더블톤",
  rewardItem: "아메리카노",
  totalStamp: 10,
  remainingStamp: 4,
};

export default function StampCard() {
  const { cafeName, rewardItem, totalStamp, remainingStamp } = mockupData;

  return (
    <div className="relative w-[280px] h-[149px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center rounded-lg overflow-hidden">
      <Image
        src={yellowCharacter}
        width={37}
        height={51}
        alt="토끼 캐릭터"
        className="absolute right-[-10px] top-[2px] rotate-[-24deg] opacity-20"
      />
      <Image
        src={orangeCharacter}
        width={37}
        height={47}
        alt="여우 캐릭터"
        className="absolute right-[-15px] top-[50px] rotate-[-54deg] opacity-20"
      />
      <div className="flex gap-[6px]">
        <Image src={coffee} width={16} height={16} alt="원두" />
        <p className="text-[#254434] text-sm font-bold">{cafeName}</p>
      </div>
      <div className="flex flex-col gap-[7px] mt-4">
        <div className="flex">
          <p className="text-[#254434] font-semibold text-xs">{rewardItem}</p>
          <p className="text-[#121212] font-semibold text-xs">까지</p>
        </div>
        <div className="flex gap-[2px]">
          <p className="text-[#254434] font-bold text-sm">스탬프 {remainingStamp}개</p>
          <p className="text-[#121212] font-bold text-sm">남았어요!</p>
        </div>
      </div>
      <Progress value={(totalStamp - remainingStamp) * 10} character={true} />
    </div>
  );
}
