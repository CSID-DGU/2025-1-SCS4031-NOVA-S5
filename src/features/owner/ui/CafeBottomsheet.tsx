"use client";

import { BottomSheet } from "@/shared";

interface CafeBottomsheetProps {
  cafeList: {
    id: number;
    name: string;
    chooseStatus: boolean;
    confirm_status: string;
    exist_stampbook: boolean;
  }[];
  onClose: () => void; // 바텀시트 닫기 함수
}

export function CafeBottomsheet({ cafeList, onClose }: CafeBottomsheetProps) {
  return (
    <BottomSheet isOpen={true} onClose={onClose}>
      <BottomSheet.Header>
        <div className="flex flex-row justify-between p-3">
          <h1 className="!text-title-medium !font-extrabold">매장 설정</h1>
          <p className="!text-body-small !font-semibold cursor-pointer">관리</p>
        </div>
      </BottomSheet.Header>
      <BottomSheet.Content>
        <div>
          {cafeList.map(cafe => (
            <div
              key={cafe.id}
              className="flex flex-row justify-between p-3 border-b border-disabledfont cursor-pointer">
              <p className="text-body-small font-semibold">{cafe.name}</p>
              {cafe.chooseStatus && (
                <div className="bg-green-300 py-[4px] px-[6px] rounded-sm">
                  <p className="text-font-green text-[10px]">현재 설정된 매장</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </BottomSheet.Content>
    </BottomSheet>
  );
}
