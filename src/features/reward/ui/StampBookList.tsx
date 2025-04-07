"use client";

import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";

export default function StampBookList() {
  const stampBooks = useStampBookStore(state => state.stampBooks);

  return (
    <div className="flex flex-col gap-10">
      {stampBooks.map(stampBook => (
        <div className="flex flex-col gap-5" key={stampBook.id}>
          <p className="text-md font-extrabold text-[#254434] cursor-pointer">{stampBook.cafeName} &gt;</p>
          <StampBook stampBookId={stampBook.id} characterType={stampBook.characterType} />
        </div>
      ))}
    </div>
  );
}
