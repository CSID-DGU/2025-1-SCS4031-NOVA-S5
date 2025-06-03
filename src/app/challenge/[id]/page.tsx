"use client";

import { ChallengeStatus, NoticeCard } from "@/features/challenge/ui";
import { CloseHeader, OwnerGNB } from "@/shared";
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
      <div className="flex flex-col gap-9 mt-8">
        <ChallengeStatus stoppedCount={2} inProgressCount={10} rewardedCount={7} />
        <NoticeCard />
      </div>
      <OwnerGNB />
    </div>
  );
}
