"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CafeSearchHeader() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex gap-[10px] p-[20px] pt-[30px]">
      <Image
        src="/icon/arrow-left.svg"
        alt="뒤로가기"
        width={30}
        height={30}
        onClick={() => router.back()}
        className="cursor-pointer"
      />
      <SearchBar placeholder="방문할 카페를 검색해 보세요!" value={name} onChange={setName} />
    </div>
  );
}

export default CafeSearchHeader;
