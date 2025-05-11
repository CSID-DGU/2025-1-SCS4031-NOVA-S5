"use client";

import { getMyCafe } from "@/features/owner/service/api";
import {
  AddCafeCard,
  AddStampbook,
  CafeBottomsheet,
  DashBoardHeader,
  QrCard,
} from "@/features/owner/ui";
import { OwnerGNB } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function OwnerMain() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const mockCafeList = [
    {
      id: 1,
      name: "카페1",
      chooseStatus: false, // 현재 카페가 선택됐는지 여부
      confirm_status: "UNDER_REVIEW", // 승인이 완료되었는지 여부
      exist_stampbook: false, // 스탬프북이 존재하는 지 여부
    },
    {
      id: 2,
      name: "카페2",
      chooseStatus: true,
      confirm_status: "APPROVED",
      exist_stampbook: true,
    },
  ];
  const {
    data: cafeList = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myCafeList"],
    queryFn: getMyCafe,
  });

  const selectedCafe = cafeList[0]; // 임시로 첫 번째 카페를 선택한 카페로 합니다.

  const handleNameClick = () => {
    setIsBottomSheetOpen(true);
  };

  let content = null;

  if (cafeList.length === 0) {
    content = <AddCafeCard status="none" />;
  } else if (selectedCafe?.confirm_status === "UNDER_REVIEW") {
    content = <AddCafeCard status="pending" />;
  } else if (selectedCafe?.confirm_status === "APPROVED") {
    content = selectedCafe.exist_stampbook ? <QrCard /> : <AddStampbook />;
  }

  return (
    <div className="p-5">
      <DashBoardHeader
        title="스탬프 적립"
        name={selectedCafe?.name}
        onNameClick={handleNameClick}
      />
      <div className="mt-8">{content}</div>
      <div className="absolute bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
      {isBottomSheetOpen && (
        <CafeBottomsheet cafeList={mockCafeList} onClose={() => setIsBottomSheetOpen(false)} />
      )}
    </div>
  );
}
