"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCafeStore } from "@/shared/store/cafeStore";
import InfoCard from "@/shared/ui/InfoCard";
import { getTodayBusinessHour } from "@/shared";

function SearchList({ keyword }: { keyword: string }) {
  const [debouncedKeyword, setDeboucedKeyword] = useState(keyword);
  const { cafes } = useCafeStore();

  useEffect(() => {
    const handler = setTimeout(() => setDeboucedKeyword(keyword), 300); // 0.5초 디바운싱
    return () => clearTimeout(handler);
  }, [keyword]);

  const hasKeyword = debouncedKeyword.trim() !== "";

  // 검색어를 포함하는 카페 필터링
  const searchResults = cafes.filter(cafe =>
    cafe.cafeName.toLowerCase().includes(debouncedKeyword.toLowerCase())
  );

  if (hasKeyword && searchResults.length > 0) {
    return (
      <div className="flex flex-col gap-4 p-4">
        {searchResults.map(cafe => {
          const { status, time } = getTodayBusinessHour((cafe as any).openHours || []);

          return (
            <InfoCard
              key={cafe.cafeId}
              id={cafe.cafeId}
              name={cafe.cafeName}
              cafe_status={status}
              business_hour={time}
              img_url={
                cafe.cafeImage ||
                "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixcafeId=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
              }
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[157px] gap-[32px]">
        <Image src="/img/character/black-ear.svg" alt="no list" width={90} height={90} />
        {hasKeyword ? (
          <p className="flex flex-col gap-[22px] text-[16px] font-[700] text-center">
            '{keyword}'와 일치하는 검색 결과가 없어요
            <br />
            <span className="text-[14px]">다른 키워드로 검색해 보세요</span>
          </p>
        ) : (
          <p className="text-[16px] font-[700]">어떤 스탬프북을 구경하러 가볼까요?</p>
        )}
      </div>
    </div>
  );
}

export default SearchList;
