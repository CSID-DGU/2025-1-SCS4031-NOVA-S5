import api from "@/shared/api/axios";
import { CafeResponse, GetCafesParams } from "../model";

export const getCafes = async (params?: GetCafesParams): Promise<CafeResponse[]> => {
  const response = await api.get("/cafes", { params });
  return response.data.data;
};

export const getPopularCafes = async () => {
  const response = await api.get("/cafes/popular");
  return response.data.data;
};
