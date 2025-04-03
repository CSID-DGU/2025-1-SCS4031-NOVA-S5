"use client";

import Image from "next/image";
import coffee from "../../../../public/coffee-cup.svg";
import arrowRight from "../../../../public/arrow-right.svg";
import { Progress } from "@/components/ui/progress";

export default function ChallengeCard() {
  return (
    <div
      className="w-[280px] h-[111px] bg-yellow-200 p-4 flex-col gap-4 justify-center items-center rounded-lg"
      style={{ backgroundColor: "#fffdf7" }}>
      <div className="flex gap-3 w-full h-[60px]">
        <div
          className="w-[60px] h-full bg-green-400 rounded-lg flex justify-center items-center"
          style={{ backgroundColor: "#EFF4E5" }}>
          <Image src={coffee} alt="커피컵" width={55} height={55} />
        </div>
        <div className="flex-col justify-center items-center gap-[10px]">
          <h5 className="text-[#254434] text-extrabold font-sm">텀블러에 음료 담기</h5>
          <p className="text-[rgba(37, 68, 52, 0.50)] text-xs">8 / 10일 진행 중!</p>
        </div>
        <Image src={arrowRight} alt="오른쪽화살표" width={20} height={20} className="!cursor-pointer" />
      </div>
      <Progress value={50} character={false} />
    </div>
  );
}
