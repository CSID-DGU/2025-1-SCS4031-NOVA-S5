import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/shared/api/user";

export function useUserInfo() {
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5,
  });

  return {
    userInfo,
    isLoading,
  };
}
