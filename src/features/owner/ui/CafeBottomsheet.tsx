"use client";

import { BottomSheet } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { chooseCafe } from "../service/api";

interface CafeBottomsheetProps {
  cafeList: {
    cafeId: number;
    cafeName: string;
    isSelected: boolean;
  }[];
  onClose: () => void; // 바텀시트 닫기 함수
}

export function CafeBottomsheet({ cafeList, onClose }: CafeBottomsheetProps) {
  const queryClient = useQueryClient();
  const { mutate: selectCafe, isPending } = useMutation({
    mutationFn: chooseCafe,
    onSuccess: () => {
      // 선택 후 캐시 무효화 및 리페치 (예: 카페 목록 다시 가져오기)
      queryClient.invalidateQueries({ queryKey: ["myCafes"] });
      queryClient.invalidateQueries({ queryKey: ["selectedCafe"] });
      // 선택 완료 후 바텀시트 닫기
      onClose();
    },
    onError: error => {
      console.error("카페 선택 실패", error);
      // TODO: 에러 UI 처리 가능
    },
  });
  const handleSelect = (cafeId: number) => {
    selectCafe(cafeId);
  };

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
              key={cafe.cafeId}
              className="flex flex-row justify-between p-3 border-b border-disabledfont cursor-pointer"
              onClick={() => handleSelect(cafe.cafeId)}>
              <p className="text-body-small font-semibold">{cafe.cafeName}</p>
              {cafe.isSelected && (
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
