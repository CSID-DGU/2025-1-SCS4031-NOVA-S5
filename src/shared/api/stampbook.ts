import api from "./axios";

// 스탬프북 저장
export const saveStampBook = async (cafeId: number) => {
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

interface CreateStampBookData {
  stampBookName: string;
  cafeIntroduction: string;
  conceptIntroduction: string;
  rewardDescription: string;
  exposed: boolean;
  designJson: any;
}

// 스탬프북 등록 (사장)
export const createStampBook = async (data: CreateStampBookData) => {
  const response = await api.post("/owner/cafes/stampbook-design", data);
  return response.data.data;
};

// 스탬프북 리스트 조회 (사장)
export const getStampBookList = async () => {
  const response = await api.get("/owner/cafes/stampbook-designs");
  return response.data.data;
};

// 스탬프북 노출 여부 변경
export const changeStampBookExposed = async (designId: number, exposed: boolean) => {
  const response = await api.patch(`/owner/cafes/stampbook-design/${designId}/expose`, {
    exposed,
  });
  return response.data.data;
};
