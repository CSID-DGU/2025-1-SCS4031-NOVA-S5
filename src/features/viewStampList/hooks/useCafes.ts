import { useQuery } from "@tanstack/react-query";
import { CafeResponse, GetCafesParams } from "../model";
import { getCafes } from "../service";

export const useCafes = (params?: GetCafesParams) => {
  return useQuery<CafeResponse[], Error>({
    queryKey: ["cafes", params],
    queryFn: () => getCafes(params),
  });
};
