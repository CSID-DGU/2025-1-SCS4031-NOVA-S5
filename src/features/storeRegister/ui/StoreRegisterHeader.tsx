"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StoreRegisterHeader() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] w-full max-w-[430px] bg-yellow-100 mx-auto flex flex-col w-full px-[25px]">
      <div className="flex items-center justify-between py-6">
        <p className="text-xl text-font-green font-extrabold">매장 등록하기</p>
        <XIcon
          className="w-[25px] h-[25px] text-[#254434B2] cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
