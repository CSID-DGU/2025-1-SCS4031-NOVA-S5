"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import dynamic from "next/dynamic";

const StampBook = dynamic(() => import("@/shared/ui/StampBook"), {
  ssr: false,
});

interface StampBookListProps {
  sortType: string;
}

export default function StampBookList({ sortType }: StampBookListProps) {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const router = useRouter();

  useEffect(() => {
    fetchAndSetStampBooks();
  }, []);

  const sortedStampBooks = [...stampBooks].sort((a, b) => {
    if (sortType === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.currentStampCount - a.currentStampCount;
    }
  });

  return (
    <div className="flex flex-col gap-10">
      {sortedStampBooks.map(stampBook => (
        <div className="flex flex-col gap-5" key={stampBook.cafeId}>
          <p
            className="text-md font-extrabold text-[#254434] cursor-pointer"
            onClick={() => router.push(`/reward/${stampBook.cafeId}`)}>
            {stampBook.cafeName} &gt;
          </p>
          <div className="flex items-center justify-center">
            <StampBook
              stampBookId={stampBook.stampBookId}
              characterType={stampBook.characterType as "YELLOW" | "GREEN" | "ORANGE" | "BLACK"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
