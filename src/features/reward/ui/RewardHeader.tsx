"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RewardHeader() {
  const router = useRouter();

  return (
    <header className="h-[84px] py-[35px] pl-[153px] pr-[27px] justify-center flex bg-green-300 ">
      <div className="w-[195px] flex justify-between items-center">
        <p className="text-lg font-extrabold text-font-green">적립내역</p>
        <Image
          src={"/icon/search.svg"}
          alt="검색 아이콘"
          width={17}
          height={17}
          className="cursor-pointer"
          onClick={() => router.push("/reward/search")}
        />
      </div>
    </header>
  );
}
