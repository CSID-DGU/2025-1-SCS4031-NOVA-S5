"use client";

import { useQuery } from "@tanstack/react-query";
import { getStampBook } from "@/shared/api/stampbook";

export const useStampBookInfo = (stampBookId: number) => {
  return useQuery({
    queryKey: ["stampBookInfo", stampBookId],
    queryFn: async () => {
      const res = await getStampBook(stampBookId);
      return res.stampBookInfo;
    },
    enabled: !!stampBookId,
  });
};
