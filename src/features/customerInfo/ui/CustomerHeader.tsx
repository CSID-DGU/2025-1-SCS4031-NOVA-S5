"use client";

import { useRouter } from "next/navigation";

export function CustomerHeader() {
  const route = useRouter();
  return (
    <header className="flex flex-row py-6 items-center justify-between border-b border-[#E2ECDC]">
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-font-green text-[20px] font-extrabold">스탬프 적립</h1>
        <p className="text-disabledfont text-body-small font-bold">고객 정보</p>
      </div>
      <img
        src="/icon/exit.svg"
        alt="exit"
        className="w-[25px] h-[25px] cursor-pointer"
        onClick={() => route.push("/owner")}
      />
    </header>
  );
}
