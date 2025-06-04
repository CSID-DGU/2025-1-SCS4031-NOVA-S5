import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postStampReward } from "../service";

export function usePostStampReward() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postStampReward,
    onSuccess: (data, stampBookId) => {
      queryClient.invalidateQueries({ queryKey: ["stampBook", stampBookId] });
      queryClient.invalidateQueries({ queryKey: ["stampBooks"] });

      console.log("🎉 리워드 전환 성공:", data);
    },
    onError: error => {
      console.error("리워드 전환 실패:", error);
    },
  });
}
