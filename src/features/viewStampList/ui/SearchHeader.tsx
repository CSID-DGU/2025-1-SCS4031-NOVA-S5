"use client"

import SearchBar from "@/shared/ui/input/SearchBar";

function SearchHeader() {
  return(
    <div className="p-[28px]">
      <div className="flex justify-between items-center pt-[33px] mb-[25px]">
        <p className="text-[#254434] font-[800] text-[20px]">스탬프 북</p>
        <div className="flex gap-1 ">
          {/*클릭 시 바텀시트 노출 */}
          <p className="text-fontgray text-[12px]">현재 위치</p>
          <img src="./icon/arrow-down.svg" alt="arrow" />        
        </div>
      </div>
      <SearchBar />   
    </div>
  )
}

export default SearchHeader;
