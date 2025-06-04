"use client";

import CafeDetailHeader from "@/features/reward/cafeDetail/ui/CafeDetailHeader";
import GNB from "@/shared/ui/GNB";
import dynamic from "next/dynamic";

const CafeDetailContent = dynamic(
  () => import("@/features/reward/cafeDetail/ui/CafeDetailContent"),
  {
    ssr: false,
  }
);

export default function StampBookDetailPage() {
  return (
    <div className="relative flex flex-col min-h-real-screen">
      <CafeDetailHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[23px] pt-[90px] px-[27px] pb-[28px] mb-[85px]">
        <CafeDetailContent />
      </div>
      <GNB />
    </div>
  );
}
