import { useQuery } from "@tanstack/react-query";
import { getUserStatus } from "../service";

export const useUserStatus = () => {
  return useQuery({
    queryKey: ["userStatus"],
    queryFn: getUserStatus,
    staleTime: 1000 * 60 * 5, // 5분 캐싱 (필요에 따라 조정)
  });
};
