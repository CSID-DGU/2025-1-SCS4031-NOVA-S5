"use client";

import { Progress } from "@/components/ui/progress";
import { useStampBookStore } from "@/shared/store/stampBookStore";

interface StampCardProps {
  stampBookId: number;
}

export default function StampCard({ stampBookId }: StampCardProps) {
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === stampBookId));

  if (!book) return null;

  const { cafeName, rewardItem, totalStamp, remainingStamp } = book;

  return (
    <div className="relative w-[280px] h-[149px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center rounded-lg overflow-hidden">
      <img
        src="/img/yellow-all.svg"
        alt="토끼 캐릭터"
        className="absolute w-[37px] h-[51px] right-[-10px] top-[2px] rotate-[-24deg] opacity-20"
      />
      <img
        src="/img/orange-all.svg"
        alt="여우 캐릭터"
        className="absolute w-[37px] h-[47px] right-[-15px] top-[50px] rotate-[-54deg] opacity-20"
      />
      <div className="flex gap-[6px]">
        <img src="/icon/coffee.svg" alt="원두" className="w-[16px] h-[20px]" />
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
      <Progress value={(totalStamp - remainingStamp) * 10} character={true} characterType="yellow" />
    </div>
  );
}
