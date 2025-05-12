"use client";

import { useRouter } from "next/navigation";
import { XIcon } from "lucide-react";

export default function TemplateHeader() {
  const router = useRouter();
  return (
    <header className="flex flex-col w-full px-[25px]">
      <div className="flex items-center justify-between py-6">
        <p className="text-xl text-font-green font-extrabold">스탬프북 디자인</p>
        <XIcon className="text-[#254434B2] cursor-pointer" onClick={() => router.back()} />
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
