"use client";

import Toast from "@/shared/ui/Toast";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMapStore } from "@/shared/store/mapStore";
import { useLocationStore } from "@/shared/store/locationStore";
import Image from "next/image";

interface LocationContentProps {
  onClose: () => void;
  onSetLocation: () => void;
}

function LocationContent({ onClose, onSetLocation }: LocationContentProps) {
  const [showToast, setShowToast] = useState(false);
  const [isPostCodeOpen, setIsPostCodeOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { setCurrentAddress, currentAddress } = useMapStore();
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
    if (isEditMode) return;
    setCurrentAddress(address);
    setShowToast(true);
    onClose();
  };

  const handleRemoveLocation = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeLocation(id);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="text-[20px] font-[800]">위치 설정</p>
        <button onClick={toggleEditMode} className="text-[14px] text-gray-600">
          {isEditMode ? "완료" : "편집"}
        </button>
      </div>

      {savedLocations.length > 0 && (
        <div className="py-7">
          <div className="space-y-2">
            {savedLocations.map(location => (
              <div
                key={location.id}
                className="flex flex-col items-start p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-50"
                onClick={() => handleLocationClick(location.address)}>
                <div className="flex flex-row justify-between w-full items-center">
                  <div>
                    {currentAddress === location.address && (
                      <div className="bg-[#E2ECDC] p-1 rounded-md mb-1 w-fit">
                        <p className="text-[10px] font-[500] text-font-green">현재 설정된 위치</p>
                      </div>
                    )}
                    <div>
                      <p className="text-[14px] font-[500]">{location.address}</p>
                      <p className="text-[12px] text-gray-500">[주소] {location.address}</p>
                    </div>
                  </div>
                  {isEditMode && (
                    <button
                      onClick={e => handleRemoveLocation(e, location.id)}
                      className="text-gray-400 hover:text-gray-600">
                      <Image src="/icon/delete.svg" alt="delete" width={18} height={18} />
                    </button>
                  )}
                </div>
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
