"use client";

import { CreateForm } from "@/features/createChallenge/ui";
import { CloseHeader } from "@/shared";
import { useRouter } from "next/navigation";

export default function ChallengeCreate() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="p-7">
      <CloseHeader title="챌린지 개최하기" onClick={handleBack} />
      <CreateForm />
    </div>
  );
}
