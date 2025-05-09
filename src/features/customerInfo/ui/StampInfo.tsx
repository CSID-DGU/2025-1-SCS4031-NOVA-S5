import { Button } from "@/components/ui/button";
import { CustomerStamp } from "./CustomerStamp";
import { RewardInfo } from "./RewardInfo";
import { History } from "./History";
import { useState } from "react";
import { SaveModal } from "./modal/SaveModal";

export function StampInfo() {
  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <h1 className="text-font-green text-lg font-extrabold mt-7">스탬프북 현황</h1>
      <div className="flex flex-col justify-center items-center mt-6">
        <CustomerStamp
          cafeName="충무로 더블톤"
          maxStampCount={10}
          currentStampCount={3}
          characterType="YELLOW"
        />
        <div className="flex flex-row justify-center gap-8 w-full mt-6">
          <Button
            className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
            onClick={() => setisModalOpen(true)}>
            스탬프 적립
          </Button>
          <Button className="bg-font-green text-[12px] font-bold rounded-full w-[135px]">
            스탬프 적립 취소
          </Button>
        </div>
      </div>
      <RewardInfo characterType="YELLOW" rewardCount={1} rewardType="stamp" />
      <History />
      <SaveModal
        open={isModalOpen}
        onOpenChange={setisModalOpen}
        characterType="YELLOW"
        type="stamp"
        username="나무심는김노바"
      />
    </div>
  );
}
