"use client";

import { ChevronLeft, ChevronRight, RedoIcon, UndoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { useCustomStore } from "@/shared/store/customStore";

export default function CustomHeader() {
  const router = useRouter();
  const { designJson } = useCreateStampStore();
  const saveDesignToJson = useCreateStampStore(state => state.saveDesignToJson);
  const undo = useCustomStore(state => state.undo);
  const redo = useCustomStore(state => state.redo);
  const history = useCustomStore(state => state.history);
  const redoStack = useCustomStore(state => state.redoStack);

  const handleNext = () => {
    console.log(designJson);
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
          <UndoIcon
            className={`cursor-pointer ${history.length === 0 ? "opacity-50" : "text-font-green"}`}
            onClick={undo}
          />
          <RedoIcon
            className={`cursor-pointer ${redoStack.length === 0 ? "opacity-50" : "text-font-green"}`}
            onClick={redo}
          />
        </div>
        <button
          className={`flex items-center justify-center gap-1 rounded-full pl-2 py-[6px] w-[72px] h-[33px] text-md font-bold ${
            history.length === 0 ? "bg-[#dcdcdc] text-[#fafafa]" : "text-font-green bg-green-300"
          }`}
          onClick={handleNext}
          disabled={history.length === 0}>
          다음
          <ChevronRight
            className={`w-5 h-5 ${history.length === 0 ? "text-[#fafafa]" : "text-font-green"}`}
          />
        </button>
      </div>
    </header>
  );
}
