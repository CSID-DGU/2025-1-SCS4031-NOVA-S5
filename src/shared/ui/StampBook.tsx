"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useStampBookStore } from "@/shared/store/stampBookStore";

interface StampCardProps {
  cafeName?: string;
  stampBookId?: number;
  characterType?: "YELLOW" | "GREEN" | "ORANGE" | "BLACK";
}

export default function StampBook({ stampBookId, cafeName, characterType }: StampCardProps) {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const book = stampBooks.find(b => b.stampBookId === stampBookId);

  useEffect(() => {
    if (!book) fetchAndSetStampBooks();
  }, [book, fetchAndSetStampBooks]);

  if (!book) return null;

  const totalStamp = book.maxStampCount;
  const cafe = book.cafeName ?? cafeName;
  const stampedCount = book.currentStampCount;
  const lowerCharacterType = (characterType || book.characterType).toLowerCase();
  const stampedSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const unstampedSrc = `/img/character/${lowerCharacterType}-face-gray.svg`;

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{cafe}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamp }).map((_, index) => (
          <img
            key={index}
            src={
              book
                ? index < stampedCount
                  ? stampedSrc
                  : unstampedSrc
                : "/img/character/face-gray.svg"
            }
            alt={index < stampedCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            width={35}
            height={35}
            style={{ width: 35, height: 35 }}
          />
        ))}
      </div>
    </div>
  );
}
