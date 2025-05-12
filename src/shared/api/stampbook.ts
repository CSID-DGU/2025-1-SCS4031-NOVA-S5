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

// 스탬프북 홈에 추가
export const addHomeStampBook = async (stampBookId: number) => {
  const response = await api.post(`/stampbooks/${stampBookId}/home`);
  return response.data.data;
};

// 스탬프북 홈에서 제거
export const removeHomeStampBook = async (stampBookId: number) => {
  const response = await api.delete(`/stampbooks/${stampBookId}/home`);
  return response.data.data;
};
