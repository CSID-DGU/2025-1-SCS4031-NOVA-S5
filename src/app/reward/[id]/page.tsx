"use client";

import CafeDetailContent from "@/features/reward/cafeDetail/ui/CafeDetailContent";
import CafeDetailHeader from "@/features/reward/cafeDetail/ui/CafeDetailHeader";
import GNB from "@/shared/ui/GNB";

export default function StampBookDetailPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto flex flex-col gap-[23px] px-[27px] py-[28px]">
        <CafeDetailHeader />
        <div className="w-full h-[1px] bg-[#E2ECDC]" />
        <CafeDetailContent />
      </div>
      <GNB />
    </div>
  );
}
