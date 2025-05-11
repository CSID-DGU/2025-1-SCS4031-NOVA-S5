"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import LocationSheet from "./LocationSheet";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/searchcafe");
  };

  return (
    <>
      <div className="p-[28px]">
        <div className="flex justify-between items-center mb-[25px]">
          <p className="text-[#254434] font-[800] text-[20px]">스탬프 북</p>
          <div className="flex gap-1" onClick={() => setIsSheetOpen(true)}>
            {/*클릭 시 바텀시트 노출 */}
            <p className="text-fontgray text-[12px]">현재 위치</p>
            <img src="./icon/arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <SearchBar onClick={handleClick} />
      </div>
      <LocationSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </>
  );
}

export default SearchHeader;
