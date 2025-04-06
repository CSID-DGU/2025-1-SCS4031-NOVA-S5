import { Progress } from "@/components/ui/progress";
import { useChallengeStore } from "@/shared/store/challengeStore";

interface ChallengeCardProps {
  challengeId: number;
}

export default function ChallengeCard({ challengeId }: ChallengeCardProps) {
  const challenge = useChallengeStore(state => state.challenges.find(b => b.id === challengeId));

  if (!challenge) return null;

  const { challengeTitle, currentDay, totalDay } = challenge;

  return (
    <div className="w-[280px] h-[111px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center items-center rounded-lg">
      <div className="flex justify-between items-center gap-3 w-full h-[60px]">
        <img src="/img/coffee-cup.svg" alt="커피컵" className="w-[60px] h-[60px] bg-green-400 rounded-lg" />
        <div className="flex flex-col justify-center gap-[10px]">
          <h5 className="text-[#254434] font-extrabold text-sm whitespace-nowrap">{challengeTitle}</h5>
          <div className="flex gap-1">
            <p className="text-[#254434] text-xs font-semibold">{currentDay}</p>
            <p className="text-[#254434] text-opacity-50 text-xs font-semibold">/ {totalDay}일 진행 중!</p>
          </div>
        </div>
        <img src="/icon/arrow-right.svg" alt="오른쪽화살표" className="w-[20px] h-[20px] cursor-pointer ml-5" />
      </div>
      <Progress value={(currentDay / totalDay) * 100} character={true} characterType="orange" />
    </div>
  );
}
