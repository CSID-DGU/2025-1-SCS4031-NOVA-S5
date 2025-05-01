import api from "./axios";

// 카페 목록 조회
export const fetchCafes = async () => {
  const response = await api.get("/cafes");
  return response.data.data;
};
