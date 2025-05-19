"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExampleHeader() {
  const router = useRouter();

  return (
    <header className="flex flex-col w-full px-[25px]">
      <div className="flex items-center justify-between gap-4 py-6">
        <p className="text-xl text-font-green font-extrabold">스탬프북 예시</p>
        <XIcon className="text-[#254434B2] w-[25px] h-[25px]" onClick={() => router.back()} />
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
