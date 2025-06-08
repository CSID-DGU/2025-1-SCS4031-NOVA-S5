"use client";

import { useAllChallenges } from "@/features/challenge/hooks/useGetAllChallenges";
import { myChallengesMock } from "@/features/challenge/model";
import { ChallengeTab, CloseHeader } from "@/shared";
import { ChallengeResponse, ChallengeStatus } from "@/shared/model";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import ProgressChallenge from "@/shared/ui/ProgressChallenge";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyChallenge() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const route = useRouter();

  const { data: allChallenges, isLoading } = useAllChallenges();

  const handleback = () => {
    route.back();
  };

  const handleDetail = (id: string) => {
    route.push(`/myChallenge/${id}`);
  };

  return (
    <div className="p-5">
      <CloseHeader title="챌린지" onClick={handleback} />
      <div className="mt-5">
        <ChallengeTab status={status} setStatus={setStatus} />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {status === "upcoming" ? (
          isLoading ? (
            <div>로딩 중...</div>
          ) : allChallenges?.length === 0 ? (
            <div>표시할 챌린지가 없습니다.</div>
          ) : (
            (allChallenges as ChallengeResponse[]).map(({ base }, idx) => (
              <ChallengeCard
                key={`upcoming-${base.challengeId}-${idx}`}
                challenge={{
                  id: base.challengeId,
                  challengeTitle: base.type,
                  description: base.rewardDescription,
                  startDate: base.startDate,
                  endDate: base.endDate,
                  cafeName: base.cafeName,
                }}
                onClick={() => handleDetail(String(base.challengeId))}
              />
            ))
          )
        ) : (
          myChallengesMock
            .filter(challenge =>
              status === "ongoing"
                ? challenge.progressCount > 0 && challenge.progressCount < 10
                : challenge.progressCount === 10
            )
            .map((challenge, idx) => (
              <ProgressChallenge
                key={`my-${challenge.challengeId}-${idx}`}
                challenge={{
                  id: challenge.challengeId,
                  challengeTitle: challenge.challengeTitle,
                  currentDay: challenge.progressCount,
                  totalDay: 10,
                }}
                onClick={() => handleDetail(String(challenge.challengeId))}
              />
            ))
        )}
      </div>
    </div>
  );
}
