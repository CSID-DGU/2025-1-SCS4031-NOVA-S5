import api from "@/shared/api/axios";

export interface UserStatusResponse {
  status: number;
  message: string;
  data: {
    name: string;
    todayStampCount: number;
    unusedRewardCount: number;
  };
}

export const getUserStatus = async (): Promise<UserStatusResponse> => {
  const response = await api.get<UserStatusResponse>("/users/status");
  return response.data;
};
