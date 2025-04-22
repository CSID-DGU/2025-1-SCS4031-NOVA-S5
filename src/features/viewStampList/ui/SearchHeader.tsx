"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import { useBottomSheetStore } from "@/shared/store/bottomSheetStore";
import LocationSheet from "./LocationSheet";

function SearchHeader() {
  const open = useBottomSheetStore(s => s.open);

  return (
    <>
      <div className="p-[28px]">
        <div className="flex justify-between items-center pt-[33px] mb-[25px]">
          <p className="text-[#254434] font-[800] text-[20px]">스탬프 북</p>
          <div className="flex gap-1 ">
            {/*클릭 시 바텀시트 노출 */}
            <p className="text-fontgray text-[12px]" onClick={open}>
              현재 위치
            </p>
            <img src="./icon/arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <SearchBar />
      </div>
      <LocationSheet />
    </>
  );
}

export default SearchHeader;
