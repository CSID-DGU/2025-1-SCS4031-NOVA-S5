"use client";

import { useEffect } from "react";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampCard from "./StampCard";
import EmptyState from "./EmptyState";
import { useRouter } from "next/navigation";

export default function StampSlider() {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const visibleBooks = stampBooks.filter(book => book.inHome).slice(0, 5);
  const route = useRouter();
  const handleToReward = () => {
    route.push("/reward");
  };

  useEffect(() => {
    fetchAndSetStampBooks();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[331px] flex justify-between items-center">
        <div className="flex gap-[14px]">
          <p className="text-md font-extrabold text-[#254434]">나의 스탬프북</p>
          <p className="text-md font-extrabold text-green-100">{stampBooks.length}</p>
        </div>
        <p className="text-xs text-[#8A8A8A99] cursor-pointer" onClick={handleToReward}>
          더보기
        </p>
      </div>

      {visibleBooks.length === 0 ? (
        <EmptyState type="stampBook" />
      ) : (
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide w-[351px]"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}>
          {visibleBooks.map(book => (
            <div
              key={book.cafeId}
              className="flex-shrink-0 scroll-snap-align-start transition-transform ease-in-out duration-700"
              style={{ scrollSnapAlign: "start" }}>
              <StampCard stampBookId={book.cafeId} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
