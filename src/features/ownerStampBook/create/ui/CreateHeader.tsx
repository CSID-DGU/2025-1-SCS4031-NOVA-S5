"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateHeader() {
  const router = useRouter();

  return (
    <header className="flex flex-col w-full px-[25px]">
      <div className="flex items-center gap-4 py-6">
        <ChevronLeftIcon
          className="w-[25px] h-[25px] text-[#25443480] cursor-pointer"
          onClick={() => router.back()}
        />
        <p className="text-xl text-font-green font-extrabold">스탬프북 디자인</p>
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
