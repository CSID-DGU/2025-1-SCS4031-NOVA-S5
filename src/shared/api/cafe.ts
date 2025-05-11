import axios from "axios";
import api from "./axios";
import { RegisterCafeRequest } from "@/features/storeRegister/model/RegisterCafe";

// 카페 목록 조회
export const fetchCafes = async () => {
  const response = await api.get("/cafes");
  return response.data.data;
};

// 도로명 주소 -> 위도, 경도 조회
export const addressToLatLng = async (query: string) => {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const response = await axios.get("https://dapi.kakao.com/v2/local/search/address.json", {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
    params: { query },
  });

  return response.data.documents[0];
};

// 카페 등록
export const registerCafe = async (data: RegisterCafeRequest) => {
  const response = await api.post("/owner/cafes/register", data);
  return response.data;
};
