"use client";

import { CloseHeader } from "@/shared";
import { useRouter } from "next/navigation";

export default function MyChallenge() {
  const route = useRouter();
  const handleback = () => {
    route.back();
  };
  return (
    <div className="p-5">
      <CloseHeader title="챌린지" onClick={handleback} />
    </div>
  );
}
