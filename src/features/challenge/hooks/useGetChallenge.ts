import { getChallengeInfo } from "@/shared/api/challenge";
import { ChallengeInfoResponse } from "@/shared/model";
import { useQuery } from "@tanstack/react-query";

export const useGetChallenge = (challengeId: number | null) =>
  useQuery<ChallengeInfoResponse>({
    queryKey: ["challenge", challengeId],
    queryFn: () => getChallengeInfo(challengeId!),
    enabled: !!challengeId,
  });
