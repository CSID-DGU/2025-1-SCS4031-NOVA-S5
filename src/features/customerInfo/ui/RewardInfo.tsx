import { Button } from "@/components/ui/button";

interface RewardInfoProps {
  rewardType: string;
  rewardCount: number; // 리워드 개수
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BEIGE"; // 캐릭터 유형
}

export function RewardInfo({ rewardCount, characterType, rewardType }: RewardInfoProps) {
  // 캐릭터 유형에 따라 이미지를 다르게 설정
  const lowerCharacterType = characterType.toLowerCase();
  const characterSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const type = rewardType === "stamp" ? "스탬프북" : "챌린지";

  return (
    <div className="flex flex-col">
      <h1 className="text-font-green text-lg font-extrabold mt-7">{`${type} 리워드 교환 현황`}</h1>

      <div className="flex flex-col items-center justify-center gap-4 mt-4 bg-[#FFF3D4] w-full h-[154px] rounded-xl">
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
        <Button className="bg-font-green text-[12px] font-bold rounded-full w-[135px]">
          리워드 교환
        </Button>
        <Button className="bg-font-green text-[12px] font-bold rounded-full w-[135px]">
          리워드 교환 취소
        </Button>
      </div>
    </div>
  );
}
