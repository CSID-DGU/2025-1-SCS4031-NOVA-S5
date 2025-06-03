"use client";

import Toast from "@/shared/ui/Toast";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMapStore } from "@/shared/store/mapStore";
import { useLocationStore } from "@/shared/store/locationStore";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface LocationContentProps {
  onClose: () => void;
  onSetLocation: () => void;
}

function LocationContent({ onClose, onSetLocation }: LocationContentProps) {
  const [showToast, setShowToast] = useState(false);
  const [isPostCodeOpen, setIsPostCodeOpen] = useState(false);
  const { setCurrentAddress } = useMapStore();
  const { savedLocations, addLocation, removeLocation } = useLocationStore();

  const handleSetLocation = () => {
    onSetLocation();
    onClose();
  };

  const handleSearchAddress = () => {
    setIsPostCodeOpen(true);
  };

  const handlePostCodeComplete = (data: any) => {
    console.log("Selected address:", data);
    setCurrentAddress(data.address);
    addLocation(data.address);
    setShowToast(true);
    setIsPostCodeOpen(false);
  };

  const handleLocationClick = (address: string) => {
    setCurrentAddress(address);
    setShowToast(true);
    onClose();
  };

  const handleRemoveLocation = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeLocation(id);
  };

  return (
    <div>
      <p className="text-[20px] font-[800] pb-[30px]">위치 설정</p>
      {savedLocations.length > 0 && (
        <div className="py-7">
          <div className="space-y-2">
            {savedLocations.map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => handleLocationClick(location.address)}>
                <div>
                  <p className="text-[14px] font-[500]">{location.address}</p>
                  <p className="text-[12px] text-gray-500">
                    {format(location.createdAt, "yyyy년 MM월 dd일", { locale: ko })}
                  </p>
                </div>
                <button
                  onClick={(e) => handleRemoveLocation(e, location.id)}
                  className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        className="flex gap-2 items-center justify-center bg-[#E2ECDC] w-full py-[13px] rounded-[10px] hover:bg-[#c6d3bf]"
        onClick={handleSetLocation}>
        <img src="./icon/bottomsheet/location.svg" alt="current location" />
        <p className="text-font-green text-[15px] font-[700]">현재 위치로 설정</p>
      </button>
      <button 
        className="flex gap-2 items-center justify-center bg-[#254434] w-full py-[13px] rounded-[10px] hover:bg-[#345e48] mt-3"
        onClick={handleSearchAddress}>
        <img src="./icon/bottomsheet/search-location.svg" alt="search location" />
        <p className="text-white font-[700] text-[15px]">위치 추가하기</p>
      </button>

      

      <Dialog open={isPostCodeOpen} onOpenChange={setIsPostCodeOpen}>
        <DialogContent className="max-w-[500px] h-[90vh] p-0 !gap-0 flex flex-col">
          <DialogHeader className="py-1 px-3 border-b shrink-0 h-12">
            <DialogTitle className="text-sm">주소 검색</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0">
            <DaumPostcode
              onComplete={handlePostCodeComplete}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </DialogContent>
      </Dialog>

      {showToast && <Toast message="위치가 설정되었습니다!" />}
    </div>
  );
}

export default LocationContent;
