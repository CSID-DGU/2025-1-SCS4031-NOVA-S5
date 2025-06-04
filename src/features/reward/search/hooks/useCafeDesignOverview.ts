"use client";

import { useQuery } from "@tanstack/react-query";
import { getStampBook } from "@/shared/api/stampbook";

export const useCafeDesignOverview = (stampBookId: number) => {
  return useQuery({
    queryKey: ["cafeDesignOverview", stampBookId],
    queryFn: async () => {
      const res = await getStampBook(stampBookId);
      return res.cafeDesignOverview;
    },
    enabled: !!stampBookId,
  });
};
