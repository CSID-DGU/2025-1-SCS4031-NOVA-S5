"use client";

import { ChallengeStatus } from "@/features/cafeOwnerChallenge/model";
import { mockChallenges } from "@/features/cafeOwnerChallenge/model/mockChallenges";
import { ChallengeTab } from "@/features/cafeOwnerChallenge/ui";
import ChallengeCard from "@/features/cafeOwnerChallenge/ui/ChallengeCard";
import { getChallengeStatus } from "@/features/cafeOwnerChallenge/utils";
import { useState } from "react";

export default function ChallengePage() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const cafename = "카페 더블톤";

  const filtered = mockChallenges.filter(
    challenge => getChallengeStatus(challenge.startDate, challenge.endDate) === status
  );

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
          <div>해당 상태의 챌린지가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
