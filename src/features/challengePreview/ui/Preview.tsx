import { Button } from "@/components/ui/button";
import { CertificationCard, ChallengeProgress } from "@/shared";
import { useCreateChallengeStore } from "@/shared/store/createChallengeStore";
import { ChallengeInfo } from "@/shared/ui/challenge/ChallengeInfo";

export function Preview() {
  const { dateRange, challengeType, reward } = useCreateChallengeStore();
  return (
    <div className="flex flex-col mt-5 gap-10">
      <ChallengeInfo
        cafename="충무로 더블톤"
        dateRange={dateRange}
        challengeType={challengeType}
        reward={reward}
      />
      <CertificationCard challengeType={challengeType} />
      <ChallengeProgress currentDay={0} totalDay={10} />
      <div className="flex justify-center">
        <Button className="bg-font-green rounded-3xl h-10 w-[139px]">챌린지 개최하기</Button>
      </div>
    </div>
  );
}
