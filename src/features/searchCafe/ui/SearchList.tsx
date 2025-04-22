"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function SearchList({ keyword }: { keyword: string }) {
  const [debouncedKeyword, setDeboucedKeyword] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => setDeboucedKeyword(keyword), 500); // 0.5초 디바운싱
    return () => clearTimeout(handler);
  }, [keyword]);

  const hasKeyword = debouncedKeyword.trim() !== "";
  const mockResults = debouncedKeyword.includes("카페") ? ["카페1", "카페2"] : [];

  if (hasKeyword && mockResults.length > 0) {
    return <div>리스트 보여주기</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[157px] gap-[32px]">
        <Image src="/img/character/beige-ear.svg" alt="no list" width={90} height={90} />
        {hasKeyword ? (
          <p>'{keyword}'와 일치하는 검색 결과가 없어요</p>
        ) : (
          <p className="text-[16px] font-[700] ">어떤 스탬프북을 구경하러 가볼까요?</p>
        )}
      </div>
    </div>
  );
}

export default SearchList;
