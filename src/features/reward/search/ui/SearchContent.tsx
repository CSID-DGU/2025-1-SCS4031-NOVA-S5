"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import { useState } from "react";
import SearchResult from "./SearchResult";

export default function SearchContent() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const stampBooks = useStampBookStore(state => state.stampBooks);

  const filteredBooks = stampBooks.filter(book =>
    book.cafeName.toLowerCase().includes(query.toLowerCase())
  );

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

      {query.trim() === "" ? (
        <div className="flex flex-col items-center gap-[38px] mt-[226px]">
          <Image src={"/img/character/beige-ear.svg"} alt="캐릭터" width={124} height={94} />
          <p className="text-font-black text-md font-bold">어떤 스탬프북을 구경하러 가볼까요?</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <p className="text-sm mt-[100px] text-[#8A8A8A]">검색 결과가 없습니다.</p>
      ) : (
        <div className="flex flex-col gap-[20px]">
          {filteredBooks.map(book => (
            <SearchResult key={book.id} stampBookId={book.id} />
          ))}
        </div>
      )}
    </section>
  );
}
