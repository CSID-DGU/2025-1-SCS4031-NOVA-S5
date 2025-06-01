"use client";

import { allChallengesMock, myChallengesMock } from "@/features/challenge/model";
import { ChallengeTab, CloseHeader } from "@/shared";
import { ChallengeStatus } from "@/shared/model";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import ProgressChallenge from "@/shared/ui/ProgressChallenge";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyChallenge() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const route = useRouter();

  const handleback = () => {
    route.back();
  };

  const displayChallenges = (() => {
    switch (status) {
      case "ongoing":
        return myChallengesMock.filter(
          challenge => challenge.progressCount > 0 && challenge.progressCount < 10
        );
      case "completed":
        return myChallengesMock.filter(challenge => challenge.progressCount === 10);
      default:
        return allChallengesMock;
    }
  })();

  return (
    <div className="p-5">
      <CloseHeader title="챌린지" onClick={handleback} />
      <div className="mt-5">
        <ChallengeTab status={status} setStatus={setStatus} />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {status === "ongoing" || status === "completed"
          ? displayChallenges.map(challenge => (
              <ProgressChallenge
                key={challenge.challengeId}
                challenge={{
                  id: challenge.challengeId,
                  challengeTitle: challenge.challengeTitle,
                  currentDay: challenge.progressCount,
                  totalDay: 10,
                }}
              />
            ))
          : displayChallenges.map(challenge => (
              <ChallengeCard
                key={challenge.challengeId}
                challenge={{
                  id: challenge.challengeId,
                  challengeTitle: challenge.challengeTitle,
                  description: challenge.description,
                  startDate: challenge.startDate,
                  endDate: challenge.endDate,
                }}
              />
            ))}
      </div>
    </div>
  );
}
