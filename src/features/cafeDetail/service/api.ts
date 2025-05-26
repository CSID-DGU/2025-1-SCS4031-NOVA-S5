import api from "@/shared/api/axios";
import { ApiResponse, CafeDetail } from "../model";

export const getCafeById = async (cafeId: number): Promise<CafeDetail> => {
  const res = await api.get<ApiResponse<CafeDetail>>(`/cafes/${cafeId}`);
  return res.data.data;
};
