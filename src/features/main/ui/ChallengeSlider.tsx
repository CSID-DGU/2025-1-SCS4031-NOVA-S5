"use client";

import { useChallengeStore } from "@/shared/store/challengeStore";
import EmptyState from "./EmptyState";
import { useRouter } from "next/navigation";
import ProgressChallenge from "@/shared/ui/ProgressChallenge";

export default function ChallengeSlider() {
  const challenges = useChallengeStore(state => state.challenges);
  const visibleChallenges = challenges.slice(0, 5);
  const route = useRouter();
  const handleToChallenge = () => {
    route.push("/myChallenge");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[331px] flex justify-between items-center">
        <div className="flex gap-[14px]">
          <p className="text-md font-extrabold text-[#254434]">참여 중인 챌린지</p>
          <p className="text-md font-extrabold text-green-100">{challenges.length}</p>
        </div>
        <p className="text-xs text-[#8A8A8A99] cursor-pointer" onClick={handleToChallenge}>
          더보기
        </p>
      </div>

      {challenges.length === 0 ? (
        <EmptyState type="challenge" />
      ) : (
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide w-[351px]"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}>
          {visibleChallenges.map(challenge => (
            <div
              key={challenge.id}
              className="flex-shrink-0 scroll-snap-align-start transition-transform ease-in-out duration-700"
              style={{ scrollSnapAlign: "start" }}>
              <ProgressChallenge
                challenge={{
                  id: challenge.id,
                  challengeTitle: challenge.challengeTitle,
                  currentDay: challenge.currentDay,
                  totalDay: challenge.totalDay,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
