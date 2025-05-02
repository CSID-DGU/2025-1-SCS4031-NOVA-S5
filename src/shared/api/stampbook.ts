import api from "./axios";

// 스탬프북 저장
export const createStampBook = async (cafeId: number) => {
  const response = await api.post("/stampbooks", { cafeId });
  return response.data.data;
};

// 스탬프북 목록 조회
export const fetchMyStampBooks = async () => {
  const response = await api.get("/stampbooks/my");
  return response.data.data;
};
