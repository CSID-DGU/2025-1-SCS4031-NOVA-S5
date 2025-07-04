"use client";

import { BottomSheet } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { chooseCafe } from "../service/api";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { mutate: selectCafe, isPending } = useMutation({
    mutationFn: chooseCafe,
    onSuccess: () => {
      // 선택 후 즉시 데이터 리페치
      queryClient.refetchQueries({ queryKey: ["myCafeList"] });
      queryClient.refetchQueries({ queryKey: ["selectedCafe"] });
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
          <p
            className="!text-body-small !font-semibold cursor-pointer"
            onClick={() => router.push("/owner/register")}>
            관리
          </p>
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
