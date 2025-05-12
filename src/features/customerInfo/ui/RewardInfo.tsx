import { Button } from "@/components/ui/button";
import { SaveModal } from "./modal/SaveModal";
import { useState } from "react";
import { CancelModal } from "./modal/CancelModal";

interface RewardInfoProps {
  rewardType: string;
  rewardCount: number; // 리워드 개수
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BLACK"; // 캐릭터 유형
  username: string;
}

export function RewardInfo({ rewardCount, characterType, rewardType, username }: RewardInfoProps) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const lowerCharacterType = characterType.toLowerCase();
  const characterSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const type = rewardType === "stamp" ? "스탬프북" : "챌린지";

  // 캐릭터별 배경색 매핑
  const characterBgColors: Record<RewardInfoProps["characterType"], string> = {
    YELLOW: "#FFF3D4",
    GREEN: "#E2ECDC",
    ORANGE: "#FFDDB9",
    BLACK: "#EFE8DC", // BLACK은 어두운색보다는 중간톤이 좋을 수 있음
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-font-green text-lg font-extrabold mt-7">{`${type} 리워드 교환 현황`}</h1>
      <div
        style={{ backgroundColor: characterBgColors[characterType] }}
        className="flex flex-col items-center justify-center gap-4 mt-4 w-full h-[154px] rounded-xl">
        <img
          src={characterSrc}
          alt={`${characterType} 캐릭터`}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <p className="text-body-small font-bold">리워드 {rewardCount}개를 교환할 수 있어요!</p>
      </div>
      <div className="flex flex-row justify-center gap-8 w-full mt-6">
        <Button
          className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
          onClick={() => setisModalOpen(true)}>
          리워드 교환
        </Button>
        <Button
          className="bg-font-green text-[12px] font-bold rounded-full w-[135px]"
          onClick={() => setIsCancelOpen(true)}>
          리워드 교환 취소
        </Button>
      </div>
      <SaveModal
        open={isModalOpen}
        onOpenChange={setisModalOpen}
        characterType={characterType}
        type={rewardType === "stamp" ? "stampReward" : "challengeReward"}
        username={username}
      />
      <CancelModal
        open={isCancelOpen}
        onOpenChange={setIsCancelOpen}
        characterType={characterType}
        type={rewardType === "stamp" ? "stampReward" : "challengeReward"}
        username={username}
      />
    </div>
  );
}
