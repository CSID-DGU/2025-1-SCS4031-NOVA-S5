"use client";

import { ChallengeStatus } from "@/features/challenge/ui";
import { CloseHeader } from "@/shared";
import { useRouter } from "next/navigation";

export default function ChallengeDetail() {
  const router = useRouter();
  const challengeType = "텀블러에 음료 담기";
  const handleBack = () => {
    router.push("/challenge");
  };

  return (
    <div className="p-7">
      <CloseHeader title={`'${challengeType}' 챌린지 관리`} onClick={handleBack} />
      <div>
        <ChallengeStatus stoppedCount={2} inProgressCount={10} rewardedCount={7} />
      </div>
    </div>
  );
}
