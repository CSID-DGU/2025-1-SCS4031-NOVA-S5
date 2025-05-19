import { useCreateChallengeStore } from "@/shared/store/createChallengeStore";
import { ChallengeInfo } from "@/shared/ui/challenge/ChallengeInfo";

export function Preview() {
  const { dateRange, challengeType, reward } = useCreateChallengeStore();
  return (
    <div className="flex flex-col mt-5">
      <ChallengeInfo
        cafename="충무로 더블톤"
        dateRange={dateRange}
        challengeType={challengeType}
        reward={reward}
      />
      <div>
        <p></p>
      </div>
    </div>
  );
}
