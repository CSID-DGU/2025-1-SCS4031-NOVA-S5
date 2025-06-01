"use client";

import { Button } from "@/components/ui/button";
import { CertificationCard, ChallengeInfo, ChallengeProgress, CloseHeader } from "@/shared";
import { useRouter } from "next/navigation";

export default function ChallengeDetail() {
  // 실제로는 이 값이 props나 서버 데이터로 전달될 것
  const isParticipating = true;
  const route = useRouter();
  const handleBack = () => {
    route.back();
  };
  const handleParticipate = () => {
    // 참여 요청 API 호출
  };

  const handleCancelParticipation = () => {
    // 참여 취소 API 호출
  };

  return (
    <div className="p-5">
      <CloseHeader title="텀블러에 음료 담기 챌린지" onClick={handleBack} />
      <div className="mt-5 flex flex-col gap-4">
        <ChallengeInfo
          cafename="더블톤"
          challengeType="tumbler"
          reward="아메리카노"
          dateRange={{ from: new Date("2025-06-01"), to: new Date("2025-06-10") }}
        />
        <CertificationCard challengeType="tumbler" />
        <ChallengeProgress currentDay={2} totalDay={10} />
        <div className="flex justify-center">
          {isParticipating ? (
            <Button
              onClick={handleCancelParticipation}
              className="bg-font-green rounded-3xl h-10 w-[139px]">
              참여 취소하기
            </Button>
          ) : (
            <Button
              onClick={handleParticipate}
              className="bg-font-green rounded-3xl h-10 w-[139px]">
              참여하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
