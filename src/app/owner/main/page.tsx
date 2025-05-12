"use client";

import { getMyCafe, getSelectedCafe } from "@/features/owner/service/api";
import {
  AddCafeCard,
  AddStampbook,
  CafeBottomsheet,
  DashBoardHeader,
  QrCard,
} from "@/features/owner/ui";
import { OwnerGNB } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function OwnerMain() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const { data: cafeList = [] } = useQuery({
    queryKey: ["myCafeList"],
    queryFn: getMyCafe,
  });

  const {
    data: selectedCafe,
    isError: isSelectedCafeError,
    isLoading: isSelectedCafeLoading,
  } = useQuery({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
    retry: false,
  });
  useEffect(() => {
    if (!isSelectedCafeLoading && (isSelectedCafeError || !selectedCafe)) {
      // 선택된 카페가 없을 경우
      setIsBottomSheetOpen(true);
    }
  }, [isSelectedCafeLoading, isSelectedCafeError, selectedCafe]);

  const handleNameClick = () => {
    setIsBottomSheetOpen(true);
  };

  let content = null;

  if (cafeList.length === 0) {
    content = <AddCafeCard status="none" />;
  } else if (selectedCafe?.registrationStatus === "UNDER_REVIEW") {
    content = <AddCafeCard status="pending" />;
  } else if (selectedCafe?.registrationStatus === "APPROVED") {
    // content = selectedCafe.exist_stampbook ? <QrCard /> : <AddStampbook />;
    content = <QrCard />;
  }

  return (
    <div className="p-5">
      <DashBoardHeader
        title="스탬프 적립"
        name={selectedCafe?.cafeName || ""}
        onNameClick={handleNameClick}
      />
      <div className="mt-8">{content}</div>
      <div className="absolute bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
      {isBottomSheetOpen && (
        <CafeBottomsheet cafeList={cafeList} onClose={() => setIsBottomSheetOpen(false)} />
      )}
    </div>
  );
}
