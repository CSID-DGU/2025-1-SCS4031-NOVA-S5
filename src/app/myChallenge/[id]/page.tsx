"use client";

import { Button } from "@/components/ui/button";
import { useGetChallenge } from "@/features/challenge/hooks/useGetChallenge";
import { CertificationCard, ChallengeInfo, ChallengeProgress, CloseHeader } from "@/shared";
import { useParams, useRouter } from "next/navigation";

export default function ChallengeDetail() {
  const route = useRouter();
  const params = useParams();

  const id = params.id;
  const challengeId = typeof id === "string" ? Number(id) : null;

  const { data, isLoading } = useGetChallenge(challengeId);

  if (!challengeId || isLoading || !data) return null;

  // 실제로는 이 값이 props나 서버 데이터로 전달될 것
  const isParticipating = true;

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
          cafeName={data.cafeName}
          challengeType={data.type}
          reward={data.rewardDescription}
          startDate={data.startDate}
          endDate={data.endDate}
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
