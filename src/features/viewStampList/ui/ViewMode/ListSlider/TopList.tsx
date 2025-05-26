"use client";

import { LocationMock } from "@/shared/mocks/StampList/LocationMock";
import TopCard from "./TopCard";
import { usePopularCafe } from "@/features/viewStampList/hooks";
import { Cafe } from "@/shared/store/cafeStore";

function TopSlider() {
  const { data: cafes, isLoading, isError } = usePopularCafe();
  if (isLoading) return <p className="px-[28px] mt-[35px]">불러오는 중...</p>;
  if (isError) return <p className="px-[28px] mt-[35px]">데이터를 불러오지 못했어요.</p>;

  return (
    <div className="flex flex-col gap-5 px-[28px] mt-[35px]">
      <div className="w-[331px] flex items-center px-1">
        <div className="flex gap-[14px]">
          <p className="text-md font-extrabold text-[#254434]">지금 가장 인기있는 스탬프 북</p>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide px-1"
        style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}>
        {cafes.map((cafe: Cafe) => (
          <div key={cafe.cafeId} className="flex-shrink-0 snap-start">
            <TopCard cafe={cafe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSlider;
