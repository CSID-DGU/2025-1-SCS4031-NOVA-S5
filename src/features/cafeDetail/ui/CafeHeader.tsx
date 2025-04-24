"use client";

import { useRouter } from "next/navigation";

function CafeHeader({ name }: { name: string }) {
  const router = useRouter();

  return (
    <div className="flex h-[70px] items-center justify-between border-b border-b-[#E2ECDC] mx-[18px]">
      <div className="flex flex-row gap-1 text-[20px] font-[800] text-tabbar">
        <p className=" text-font-green">{name}</p>의 스탬프북
      </div>
      <img
        src="/icon/exit.svg"
        alt="exit"
        className="w-[25px] h-[25px] cursor-pointer"
        onClick={() => router.back()}
      />
    </div>
  );
}

export default CafeHeader;
