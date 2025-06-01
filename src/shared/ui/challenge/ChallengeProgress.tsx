import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface ChallengeProgressProps {
  currentDay: number;
  totalDay: number;
}

export function ChallengeProgress({ currentDay, totalDay }: ChallengeProgressProps) {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src="/icon/challenge/progress.svg" width={18} height={18} alt="progress" />
        <label className="text-base text-font-green font-extrabold">챌린지 진행률</label>
      </div>

      <div className="relative flex flex-col items-center justify-center h-[118px] bg-green-400 rounded-xl mt-4 overflow-hidden">
        <div className="absolute right-0">
          <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
          <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
          <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
        </div>
        <div className="absolute flex flex-col gap-5 bottom-2">
          <label className="text-base font-bold">
            {currentDay > 0
              ? `${currentDay}/${totalDay}회 진행 중입니다!`
              : "아직 진행 전인 챌린지에요!"}
          </label>
          <Progress value={(currentDay / totalDay) * 100} character={true} characterType="orange" />
        </div>
      </div>
    </div>
  );
}
