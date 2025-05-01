"use client";

import { useCafeInfoStore } from "@/shared/store/cafeInfoStore";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SearchResultProps {
  stampBookId?: number;
}

export default function SearchResult({ stampBookId }: SearchResultProps) {
  const router = useRouter();
  const book = useStampBookStore(state =>
    stampBookId ? state.stampBooks.find(b => b.cafeId === stampBookId) : null
  );
  const cafe = useCafeInfoStore(state =>
    stampBookId ? state.cafes.find(c => c.cafeId === stampBookId) : null
  );

  if (!book) return null;

  return (
    <div
      className="w-full h-[105px] flex gap-3 p-3 rounded-lg bg-yellow-300 cursor-pointer shadow-md"
      onClick={() => router.push(`/reward/${stampBookId}`)}>
      <div className="relative w-[80px] h-[80px] rounded-md overflow-hidden">
        <Image src="/img/doubletone.svg" alt="cafe img" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="w-[121px] text-center py-[5px] rounded-full bg-green-300 text-[10px] font-medium text-font-green">
          지금까지 모은 스탬프 {book.currentStampCount}개
        </p>
        <p className="text-font-green text-sm font-bold">{book.cafeName}</p>
        <div className="flex gap-[5px] items-center">
          <Image src="/icon/clock.svg" alt="clock" width={13} height={13} />
          <p className="text-sm text-[#254434B2] font-medium">
            {cafe?.openHours} (Last order {cafe?.lastOrder})
          </p>
        </div>
      </div>
    </div>
  );
}
