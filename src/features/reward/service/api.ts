import api from "@/shared/api/axios";

export async function postStampReward(stampBookId: number): Promise<string> {
  const response = await api.post(`/stampbooks/${stampBookId}/reward`);
  return response.data.data; // data는 string 타입
}
