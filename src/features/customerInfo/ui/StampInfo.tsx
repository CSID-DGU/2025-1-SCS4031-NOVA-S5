import { Button } from "@/components/ui/button";
import { CustomerStamp } from "./CustomerStamp";
import { RewardInfo } from "./RewardInfo";
import { History } from "./History";
import { useState } from "react";
import { SaveModal } from "./modal/SaveModal";
import { CancelModal } from "./modal/CancelModal";
import { UserData } from "../model";

interface StampInfoProps {
  userData: UserData;
}

export function StampInfo({ userData }: StampInfoProps) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const userTotalStampCount = userData.history.reduce((acc, book) => acc + book.stampCount, 0);

  return (
    <div className="flex flex-col">
      <h1 className="text-font-green text-lg font-extrabold mt-7">스탬프북 현황</h1>
      <div className="flex flex-col justify-center items-center mt-6">
        <CustomerStamp
          cafeName="충무로 더블톤"
          maxStampCount={userData.history[0].maxStampCount}
          currentStampCount={userTotalStampCount}
          characterType={userData.characterType}
        />
        <div className="flex flex-row justify-center gap-8 w-full mt-6">
          <Button
            className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
            onClick={() => setisModalOpen(true)}>
            스탬프 적립
          </Button>
          <Button
            className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
            onClick={() => setIsCancelOpen(true)}>
            스탬프 적립 취소
          </Button>
        </div>
      </div>
      <RewardInfo
        characterType={userData.characterType}
        rewardCount={userData.rewardCount}
        rewardType="stamp"
        username={userData.name}
      />
      <History />
      <SaveModal
        open={isModalOpen}
        onOpenChange={setisModalOpen}
        characterType={userData.characterType}
        type="stamp"
        username={userData.name}
      />
      <CancelModal
        username={userData.name}
        open={isCancelOpen}
        onOpenChange={setIsCancelOpen}
        characterType={userData.characterType}
        type="stamp"
      />
    </div>
  );
}
