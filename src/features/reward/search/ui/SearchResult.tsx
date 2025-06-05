"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatBusinessHours } from "@/shared/utils/date";
import { useCafeDesignOverview } from "../hooks/useCafeDesignOverview";
import { useStampBookInfo } from "../hooks/useStampBookInfo";

interface SearchResultProps {
  cafeId: number;
  stampBookId: number;
}

export default function SearchResult({ cafeId, stampBookId }: SearchResultProps) {
  const router = useRouter();

  const { data: cafe, isLoading: cafeLoading } = useCafeDesignOverview(stampBookId);
  const { data: book, isLoading: bookLoading } = useStampBookInfo(stampBookId);

  if (!cafe || !book || cafeLoading || bookLoading) return null;

  const businessHours = formatBusinessHours(cafe.openHours, cafe.specialDays);

  return (
    <div
      className="w-full min-w-[320px] h-[105px] flex gap-3 p-3 rounded-lg bg-yellow-300 cursor-pointer shadow-md"
      onClick={() => router.push(`/reward/${cafeId}`)}>
      <div className="relative w-[80px] h-[80px] rounded-md overflow-hidden">
        <Image src={cafe.cafeUrl} alt="cafe img" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="w-[121px] text-center py-[5px] rounded-full bg-green-300 text-[10px] font-medium text-font-green">
          지금까지 모은 스탬프 {book.currentStampCount}개
        </p>
        <p className="text-font-green text-sm font-bold">{book.cafeName}</p>
        <div className="flex gap-[5px] items-center">
          <Image src="/icon/clock.svg" alt="clock" width={13} height={13} />
          <p className="text-sm text-[#254434B2] font-medium">
            {businessHours} (Last order {cafe.openHours?.[0]?.lastOrder?.slice(0, 5)})
          </p>
        </div>
      </div>
    </div>
  );
}
