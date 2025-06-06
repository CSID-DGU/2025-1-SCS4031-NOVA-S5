import { ChallengeResponse } from "../model";
import api from "./axios";

// 유저
// 진행 가능한 챌린지 조회
export const getAllChallenges = async (): Promise<ChallengeResponse[]> => {
  const response = await api.get("/challenges/browse");
  return response.data.data;
};
