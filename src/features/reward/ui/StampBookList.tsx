"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";

export default function StampBookList() {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const router = useRouter();

  useEffect(() => {
    fetchAndSetStampBooks();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {stampBooks.map(stampBook => (
        <div className="flex flex-col gap-5" key={stampBook.cafeId}>
          <p
            className="text-md font-extrabold text-[#254434] cursor-pointer"
            onClick={() => router.push(`/reward/${stampBook.cafeId}`)}>
            {stampBook.cafeName} &gt;
          </p>
          <div className="flex items-center justify-center">
            <StampBook stampBookId={stampBook.cafeId} characterType={stampBook.characterType} />
          </div>
        </div>
      ))}
    </div>
  );
}
