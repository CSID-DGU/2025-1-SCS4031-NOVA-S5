"use client";

import { ChallengeStatus } from "@/features/cafeOwnerChallenge/model";
import { ChallengeTab } from "@/features/cafeOwnerChallenge/ui";
import { useState } from "react";

export default function ChallengePage() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const cafename = "카페 더블톤";

  return (
    <div className="p-7">
      <div className="py-9">
        <h1 className="text-xl font-extrabold text-font-green">{cafename}의 챌린지 리스트</h1>
      </div>
      <ChallengeTab status={status} setStatus={setStatus} />

      <div className="mt-6">
        {status === "upcoming" && <div>진행 예정 챌린지</div>}
        {status === "ongoing" && <div>진행 중 챌린지</div>}
        {status === "completed" && <div>종료된 챌린지</div>}
      </div>
    </div>
  );
}
