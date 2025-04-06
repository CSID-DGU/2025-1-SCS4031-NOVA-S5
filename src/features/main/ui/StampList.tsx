"use client";

import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampCard from "./StampCard";

export default function StampList() {
  const stampBooks = useStampBookStore(state => state.stampBooks);
  const visibleBooks = stampBooks.slice(0, 5);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[331px] flex justify-between items-center">
        <div className="flex gap-[14px]">
          <p className="text-md font-extrabold text-[#254434]">나의 스탬프북</p>
          <p className="text-md font-extrabold text-green-100">{stampBooks.length}</p>
        </div>
        <p className="text-xs text-[#8A8A8A99] cursor-pointer">더보기</p>
      </div>
      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide w-[355px] px-2"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}>
        {visibleBooks.map(book => (
          <div
            key={book.id}
            className="flex-shrink-0 scroll-snap-align-start transition-transform ease-in-out duration-700"
            style={{ scrollSnapAlign: "start" }}>
            <StampCard stampBookId={book.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
