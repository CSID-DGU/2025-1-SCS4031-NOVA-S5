"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchContent() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center gap-[226px]">
      <div className="w-full flex gap-[10px] items-center">
        <Image
          src={"/icon/arrow-left.svg"}
          alt="왼쪽 화살표"
          width={30}
          height={30}
          onClick={() => router.push("/reward")}
        />
        <SearchBar placeholder="어떤 카페에 스탬프를 적립했을까요?" />
      </div>
      <div className="flex flex-col items-center gap-[38px]">
        <Image src={"/img/character/beige-ear.svg"} alt="캐릭터" width={124} height={94} />
        <p className="text-font-black text-md font-bold">어떤 스탬프북을 구경하러 가볼까요?</p>
      </div>
    </div>
  );
}
