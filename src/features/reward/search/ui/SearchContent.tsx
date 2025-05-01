"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

export default function SearchContent() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const stampBooks = useStampBookStore(state => state.stampBooks);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  const filteredBooks = stampBooks.filter(book =>
    book.cafeName.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const hasQuery = debouncedQuery.trim() !== "";

  return (
    <section className="w-full flex flex-col items-center gap-[30px]">
      <div className="w-full flex gap-[10px] items-center">
        <Image
          src={"/icon/arrow-left.svg"}
          alt="왼쪽 화살표"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => router.push("/reward")}
        />
        <SearchBar
          placeholder="어떤 카페에 스탬프를 적립했을까요?"
          value={query}
          onChange={setQuery}
        />
      </div>

      {hasQuery ? (
        filteredBooks.length > 0 ? (
          <div className="flex flex-col gap-[20px]">
            {filteredBooks.map(book => (
              <SearchResult key={book.cafeId} stampBookId={book.cafeId} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[38px] mt-[226px]">
            <Image src={"/img/character/beige-ear.svg"} alt="캐릭터" width={124} height={94} />
            <p className="text-font-black text-md font-bold flex flex-col items-center">
              '{debouncedQuery}'와 일치하는 검색 결과가 없어요
              <br />
              <span className="text-[14px]">다른 키워드로 검색해 보세요</span>
            </p>
          </div>
        )
      ) : (
        <div className="flex flex-col items-center gap-[38px] mt-[226px]">
          <Image src={"/img/character/beige-ear.svg"} alt="캐릭터" width={124} height={94} />
          <p className="text-font-black text-md font-bold">어떤 스탬프북을 구경하러 가볼까요?</p>
        </div>
      )}
    </section>
  );
}
