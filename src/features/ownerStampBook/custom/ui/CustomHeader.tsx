"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCreateStampStore } from "@/shared/store/createStampStore";

export default function CustomHeader() {
  const router = useRouter();
  const saveDesignToJson = useCreateStampStore(state => state.saveDesignToJson);

  const handleNext = () => {
    saveDesignToJson();
    router.push("/owner/stampbook/info");
  };

  return (
    <header className="flex flex-col w-full px-5 bg-yellow-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px] py-6">
          <ChevronLeft
            className="text-[#254434B2] w-[25px] h-[25px] cursor-pointer"
            onClick={() => router.back()}
          />
          <Image
            src={"/icon/undo.svg"}
            width={18}
            height={18}
            alt="undo"
            className="cursor-pointer"
          />
          <Image
            src={"/icon/redo.svg"}
            width={18}
            height={18}
            alt="redo"
            className="cursor-pointer"
          />
        </div>
        <button
          className="flex items-center justify-center gap-1 bg-green-300 rounded-full pl-2 py-[6px] w-[72px] w-[33px] text-font-green text-md font-bold"
          onClick={handleNext}>
          다음
          <ChevronRight className="w-5 h-5 text-font-green" />
        </button>
      </div>
    </header>
  );
}
