import { useQuery } from "@tanstack/react-query";
import { getSelectedCafe } from "@/features/owner/service/api";
import { Cafe } from "@/features/ownerStampBook/example/model/cafe";

export function useSelectedCafe() {
  const { data: selectedCafe, ...rest } = useQuery<Cafe>({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
  });

  return {
    selectedCafe,
    ...rest,
  };
}
