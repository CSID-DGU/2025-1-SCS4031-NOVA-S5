"use client";

import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import EmptyState from "@/features/main/ui/EmptyState";
import StampSlider from "@/features/main/ui/StampSlider";
import SearchResult from "@/features/reward/search/ui/SearchResult";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <StampSlider />
      <ChallengeSlider />
      <EmptyState type="stampBook" />
      <SearchResult />
      <button onClick={() => router.push("/main")}>메인 페이지로 가기</button>
    </div>
  );
}
