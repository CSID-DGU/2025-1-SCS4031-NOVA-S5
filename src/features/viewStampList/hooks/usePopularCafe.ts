import { useQuery } from "@tanstack/react-query";
import { getPopularCafes } from "../service";

export const usePopularCafe = () => {
  return useQuery({
    queryKey: ["popularCafes"],
    queryFn: getPopularCafes,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh
    retry: 1, // 실패 시 재시도 1회
  });
};
