"use client";

import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import Image from "next/image";

function RewardCard({ isOwner = false }: { isOwner?: boolean }) {
  const cafe = useCafeStore(state => state.cafe);
  const { cafeIntroduction, conceptIntroduction, rewardDescription } = useCreateStampStore();
  const displayCafeDetail = isOwner ? cafeIntroduction : cafe?.cafe_detail;
  const displayRewardDescription = isOwner ? rewardDescription : cafe?.reward;
  const displayConceptIntroduction = isOwner ? conceptIntroduction : cafe?.desc;

  return (
    <div>
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        ☕ 스탬프 다 모으면 {displayRewardDescription}!
      </p>
      <div className="flex flex-row gap-2 items-center bg-[#FFFDF7] w-full h-[62px] rounded-[10px] p-[11px]">
        <Image src="/img/cafe_logo.png" alt="logo" width={42} height={40} />
        <div>
          <p className="text-[12px] font-[700] text-font-green">{displayCafeDetail}</p>
          <p className="text-[10px] font-[600] text-tabbar">{displayConceptIntroduction}</p>
        </div>
      </div>
    </div>
  );
}

export default RewardCard;
