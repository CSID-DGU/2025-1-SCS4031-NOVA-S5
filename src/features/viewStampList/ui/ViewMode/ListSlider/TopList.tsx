"use client";

import { LocationMock } from "@/shared/mocks/StampList/LocationMock";
import TopCard from "./TopCard";

function TopSlider() {
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
        {LocationMock.map(cafe => (
          <div key={cafe.cafeId} className="flex-shrink-0 snap-start">
            <TopCard cafe={cafe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSlider;
