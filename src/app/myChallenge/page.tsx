"use client";

import { ChallengeTab, CloseHeader } from "@/shared";
import { ChallengeStatus } from "@/shared/model";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyChallenge() {
  const [status, setStatus] = useState<ChallengeStatus>("upcoming");
  const route = useRouter();
  const handleback = () => {
    route.back();
  };
  return (
    <div className="p-5">
      <CloseHeader title="챌린지" onClick={handleback} />
      <div className="mt-5">
        <ChallengeTab status={status} setStatus={setStatus} />
      </div>
    </div>
  );
}
