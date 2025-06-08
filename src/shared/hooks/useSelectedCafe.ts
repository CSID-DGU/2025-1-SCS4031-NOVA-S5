import { useQuery } from "@tanstack/react-query";
import { getSelectedCafe } from "@/features/owner/service/api";
import { Cafe } from "@/features/ownerStampBook/example/model/cafe";

export function useSelectedCafe(enabled = true) {
  const { data: selectedCafe, ...rest } = useQuery<Cafe>({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
    enabled,
  });

  return {
    selectedCafe,
    ...rest,
  };
}
