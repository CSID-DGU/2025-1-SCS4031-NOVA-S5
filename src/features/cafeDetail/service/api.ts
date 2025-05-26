import api from "@/shared/api/axios";
import { CafeDetail } from "../model";

export const getCafeById = async (cafeId: number): Promise<CafeDetail> => {
  const res = await api.get<CafeDetail>(`/cafes/${cafeId}`);
  return res.data;
};
