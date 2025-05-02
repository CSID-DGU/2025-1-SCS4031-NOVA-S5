"use client";

import CafeDetailContent from "@/features/reward/cafeDetail/ui/CafeDetailContent";
import CafeDetailHeader from "@/features/reward/cafeDetail/ui/CafeDetailHeader";
import GNB from "@/shared/ui/GNB";

export default function StampBookDetailPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <CafeDetailHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[23px] px-[27px] pb-[28px] mb-[85px]">
        <CafeDetailContent />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <GNB />
      </div>
    </div>
  );
}
