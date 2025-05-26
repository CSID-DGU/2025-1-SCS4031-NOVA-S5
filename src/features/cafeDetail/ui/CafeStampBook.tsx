"use client";

import Image from "next/image";

interface StampBookProps {
  data: {
    stampBookId: number;
    cafeName: string;
    maxStampCount: number;
    currentStampCount: number;
    characterType: "YELLOW" | "GREEN" | "ORANGE" | "BLACK";
  };
}

export default function CafeStampBook({ data }: StampBookProps) {
  const { cafeName, maxStampCount, currentStampCount, characterType } = data;

  const lowerCharacterType = characterType.toLowerCase();
  const stampedSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const unstampedSrc = `/img/character/${lowerCharacterType}-face-gray.svg`;

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{cafeName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: maxStampCount }).map((_, index) => (
          <img
            key={index}
            src={index < currentStampCount ? stampedSrc : unstampedSrc}
            alt={index < currentStampCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            width={35}
            height={35}
            style={{ width: 35, height: 35 }}
          />
        ))}
      </div>
    </div>
  );
}
