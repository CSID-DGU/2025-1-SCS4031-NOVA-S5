import { ChevronRightIcon } from "lucide-react";

export default function StampBookHeader() {
  return (
    <header className="flex flex-col w-full px-[25px]">
      <div className="flex items-center justify-between py-6">
        <p className="text-xl text-font-green font-extrabold">스탬프북 리스트</p>
        <div className="flex gap-1 items-center cursor-pointer">
          <p className="text-xs text-[#25443480] font-semibold">임시 저장 목록</p>
          <ChevronRightIcon className="w-[17px] h-[17px] text-[#25443480]" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
