"use client";

import {
  AddCafeCard,
  AddStampbook,
  CafeBottomsheet,
  DashBoardHeader,
  QrCard,
} from "@/features/owner/ui";
import { OwnerGNB } from "@/shared";
import { useState } from "react";

export default function OwnerMain() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const mockCafeList = [
    {
      id: 1,
      name: "카페1",
      chooseStatus: false,
      confirm_status: "pending",
      exist_stampbook: false,
    },
    {
      id: 2,
      name: "카페2",
      chooseStatus: true,
      confirm_status: "confirmed",
      exist_stampbook: true,
    },
  ];

  const selectedCafe = mockCafeList.find(cafe => cafe.chooseStatus);

  const handleNameClick = () => {
    setIsBottomSheetOpen(true);
  };

  let content = null;

  if (mockCafeList.length === 0) {
    content = <AddCafeCard status="none" />;
  } else if (selectedCafe?.confirm_status === "pending") {
    content = <AddCafeCard status="pending" />;
  } else if (selectedCafe?.confirm_status === "confirmed") {
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
