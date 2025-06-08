import { getAllChallenges } from "@/shared/api/challenge";
import { ChallengeResponse } from "@/shared/model";
import { useQuery } from "@tanstack/react-query";

export const useAllChallenges = () =>
  useQuery<ChallengeResponse[]>({
    queryKey: ["allChallenges"],
    queryFn: getAllChallenges,
  });
