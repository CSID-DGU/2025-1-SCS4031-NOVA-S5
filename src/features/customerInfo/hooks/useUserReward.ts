import { useMutation } from "@tanstack/react-query";
import { UseRewardRequest, UseRewardResponse, useRewardApi } from "../service";

export const useUserReward = () => {
  return useMutation<UseRewardResponse, unknown, UseRewardRequest>({
    mutationFn: useRewardApi,
  });
};
