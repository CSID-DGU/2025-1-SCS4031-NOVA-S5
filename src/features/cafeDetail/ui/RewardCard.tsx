"use client";

import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";
import Image from "next/image";

function RewardCard({ isOwner = false }: { isOwner?: boolean }) {
  const cafe = useCafeStore(state => state.cafe);
  const { selectedCafe } = useSelectedCafe();

  const displayCafeDetail = isOwner ? selectedCafe?.cafeIntroduction : cafe?.cafe_detail;

  return (
    <div>
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        ☕ 스탬프 다 모으면 {isOwner ? selectedCafe?.rewardDescription : cafe?.reward}!
      </p>
      <div className="flex flex-row gap-2 items-center bg-[#FFFDF7] w-full h-[62px] rounded-[10px] p-[11px]">
        <Image src="/img/cafe_logo.png" alt="logo" width={42} height={40} />
        <div>
          <p className="text-[12px] font-[700] text-font-green">{displayCafeDetail}</p>
          <p className="text-[10px] font-[600] text-tabbar">
            {cafe?.desc}한 감성을 스탬프북에서 느껴보세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RewardCard;
