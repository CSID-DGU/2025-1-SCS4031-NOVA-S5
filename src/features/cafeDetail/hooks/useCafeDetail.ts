import { useQuery } from "@tanstack/react-query";
import { CafeDetail } from "../model";
import { getCafeById } from "../service";

export const useCafe = (cafeId: number) => {
  return useQuery<CafeDetail>({
    queryKey: ["cafe", cafeId],
    queryFn: () => getCafeById(cafeId),
    enabled: !!cafeId, // 0 또는 undefined일 경우 요청 방지
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
};
