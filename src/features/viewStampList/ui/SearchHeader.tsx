"use client";

import SearchBar from "@/shared/ui/input/SearchBar";
import LocationSheet from "./LocationSheet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toast from "@/shared/ui/Toast";
import { useMapStore } from "@/shared/store/mapStore";

function SearchHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const { currentAddress, isCurrentLocation } = useMapStore();

  const handleClick = () => {
    router.push("/searchcafe");
  };

  const handleSetLocation = () => {
    setShowToast(true);
    // 토스트가 3초 후에 사라지도록 설정
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div className="p-[28px]">
        <div className="flex justify-between items-center mb-[25px]">
          <p className="text-[#254434] font-[800] text-[20px]">스탬프 북</p>
          <div className="flex gap-1" onClick={() => setIsSheetOpen(true)}>
            {/*클릭 시 바텀시트 노출 */}
            <p className="text-fontgray text-[12px]">
              {isCurrentLocation ? "현재 위치" : currentAddress || "현재 위치"}
            </p>
            <img src="./icon/arrow-down.svg" alt="arrow" />
          </div>
        </div>
        <SearchBar onClick={handleClick} />
      </div>
      <LocationSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onSetLocation={handleSetLocation}
      />
      {showToast && <Toast message="현재 위치로 설정되었습니다!" />}
    </>
  );
}

export default SearchHeader;
