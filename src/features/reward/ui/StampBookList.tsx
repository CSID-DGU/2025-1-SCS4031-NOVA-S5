"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";
import Image from "next/image";

export default function StampBookList() {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const router = useRouter();

  useEffect(() => {
    fetchAndSetStampBooks();
  }, []);

  return (
    <div className="w-full flex flex-col gap-[20px]">
      {stampBooks.map(stampBook => (
        <div
          key={stampBook.stampBookId}
          className="w-full flex flex-col gap-[10px] cursor-pointer"
          onClick={() => router.push(`/reward/cafe/${stampBook.cafeId}`)}>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <Image
                src={`/img/character/${stampBook.characterType.toLowerCase()}-all.svg`}
                alt="캐릭터 이미지"
                width={52}
                height={59}
                style={{ width: 52, height: 59 }}
              />
              <div className="flex flex-col gap-[5px]">
                <p className="text-md text-font-black font-bold">{stampBook.cafeName}</p>
                <p className="text-xs text-font-black">
                  으쌰으쌰, 리워드까지 {stampBook.remainingStampCount}개 남았어요!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <StampBook
                stampBookId={stampBook.stampBookId}
                characterType={stampBook.characterType === "BEIGE" ? "BLACK" : stampBook.characterType}
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-green-300" />
        </div>
      ))}
    </div>
  );
}
