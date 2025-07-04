import api from "@/shared/api/axios";

interface PostStampRequest {
  qrCodeValue: string;
  count: number;
}

export interface UseRewardRequest {
  qrCodeValue: string;
  count: number;
}

export interface UseRewardResponse {
  status: number;
  message: string;
  data: string;
}

export const getCustomerInfo = async (qrCodeValue: string) => {
  const response = await api.get("/staff/stamps", {
    params: { qrCodeValue },
  });
  return response.data.data;
};

export const postStamp = async (data: PostStampRequest) => {
  const response = await api.post("/staff/stamps", data);
  return response.data.data;
};

export const useRewardApi = async (data: UseRewardRequest): Promise<UseRewardResponse> => {
  const response = await api.patch<UseRewardResponse>("/staff/stampbooks/rewards", data);
  return response.data;
};
