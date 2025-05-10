import { Button } from "@/components/ui/button";
import ChallengeCard from "./ChallengeCard";
import { RewardInfo } from "./RewardInfo";
import { useState } from "react";
import { SaveModal } from "./modal/SaveModal";
import { CancelModal } from "./modal/CancelModal";

export function ChallengeInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-font-green text-lg font-extrabold mt-7">챌린지</h1>
      <ChallengeCard title="텀블러에 음료 담기" current={8} total={10} />
      <div className="flex flex-row justify-center gap-8 w-full mt-6">
        <Button
          className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
          onClick={() => setIsModalOpen(true)}>
          챌린지 인증
        </Button>
        <Button
          className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
          onClick={() => setIsCancelOpen(true)}>
          챌린지 인증 취소
        </Button>
      </div>
      <RewardInfo rewardType="challenge" characterType="YELLOW" rewardCount={1} />
      <SaveModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        characterType="YELLOW"
        type="challenge"
        username="나무심는김노바"
      />
      <CancelModal
        open={isCancelOpen}
        onOpenChange={setIsCancelOpen}
        characterType="YELLOW"
        type="challenge"
        username="나무심는김노바"
      />
    </div>
  );
}
