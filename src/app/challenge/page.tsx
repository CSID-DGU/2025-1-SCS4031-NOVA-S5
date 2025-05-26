"use client";

import { ChallengeStatus } from "@/features/cafeOwnerChallenge/model";
import { mockChallenges } from "@/features/cafeOwnerChallenge/model/mockChallenges";
import { ChallengeTab, PlusButton, StartChallenge } from "@/features/cafeOwnerChallenge/ui";
import ChallengeCard from "@/features/cafeOwnerChallenge/ui/ChallengeCard";
import { getChallengeInfo, getChallengeStatus } from "@/features/cafeOwnerChallenge/utils";
import { OwnerGNB } from "@/shared";
import { useState } from "react";

export default function ChallengePage() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const cafename = "카페 더블톤";

  const filtered = mockChallenges.filter(
    challenge => getChallengeStatus(challenge.startDate, challenge.endDate) === status
  );

  const emptyState = getChallengeInfo(status);

  return (
    <div className="p-7">
      <div className="pb-9">
        <h1 className="text-xl font-extrabold text-font-green">{cafename}의 챌린지 리스트</h1>
      </div>
      <ChallengeTab status={status} setStatus={setStatus} />

      <div className="mt-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map(challenge => <ChallengeCard key={challenge.id} challenge={challenge} />)
        ) : (
          <div>
            <StartChallenge
              title={emptyState.title}
              description={emptyState.description}
              label="챌린지 개최하러 가기"
            />
          </div>
        )}
      </div>
      {filtered.length > 0 && (
        <div className="absolute bottom-[100px] right-6 z-50">
          <PlusButton />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
    </div>
  );
}
