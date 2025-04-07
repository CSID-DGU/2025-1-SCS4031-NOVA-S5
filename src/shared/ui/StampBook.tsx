"use client";

import { useStampBookStore } from "../store/stampBookStore";

interface StampCardProps {
  stampBookId: number;
  characterType?: "yellow" | "green" | "orange" | "beige";
}

export default function StampBook({ stampBookId, characterType = "yellow" }: StampCardProps) {
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === stampBookId));
  if (!book) return <p>스탬프북을 찾을 수 없어요</p>;

  const { cafeName, totalStamp, remainingStamp } = book;
  const stampedCount = totalStamp - remainingStamp;
  const stampedSrc = `/img/character/${characterType}-face.svg`;

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-[18px] bg-yellow-300 rounded-lg">
      <div className="flex gap-[6px] items-center">
        <img src="/icon/coffee.svg" alt="원두" className="w-[16px] h-[16px]" />
        <p className="text-sm font-bold text-[#254434]">{cafeName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 px-[15px]">
        {Array.from({ length: totalStamp }).map((_, index) => (
          <img
            key={index}
            src={index < stampedCount ? stampedSrc : "/img/character/yellow-gray.svg"}
            alt={index < stampedCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            className="w-[35px] h-[35px]"
          />
        ))}
      </div>
    </div>
  );
}
