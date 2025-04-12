"use client";

import Image from "next/image";
import { useStampBookStore } from "../store/stampBookStore";

interface StampCardProps {
  cafeName?: string;
  stampBookId?: number;
  characterType?: "yellow" | "green" | "orange" | "beige";
}

// 다른 데이터 없이 카페 이름만 필요한 경우에는 cafeName만 입력
// 모든 데이터(카페 이름, 전체 스탬프, 남은 스탬프)를 불러오려면 stampBookId 입력
// characterType은 각 카페의 characterType 받아오기
export default function StampBook({ cafeName, stampBookId, characterType }: StampCardProps) {
  const book = useStampBookStore(state =>
    stampBookId ? state.stampBooks.find(b => b.id === stampBookId) : null
  );

  const totalStamp = book?.totalStamp ?? 10;
  const cafe = book ? book.cafeName : cafeName;
  const stampedCount = book ? book.totalStamp - book.remainingStamp : 0;
  const stampedSrc = `/img/character/${characterType}-face.svg`;
  const unstampedSrc = characterType
    ? `/img/character/${characterType}-face-gray.svg`
    : `/img/character/face-gray.svg`;

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{cafe}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamp }).map((_, index) => (
          <Image
            key={index}
            src={index < stampedCount ? stampedSrc : unstampedSrc}
            alt={index < stampedCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
