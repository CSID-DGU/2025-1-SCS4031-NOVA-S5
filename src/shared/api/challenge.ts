import { ChallengeData, ChallengeInfoResponse, ChallengeResponse } from "../model";
import api from "./axios";

// 유저
// 진행 가능한 챌린지 조회
export const getAllChallenges = async (): Promise<ChallengeResponse[]> => {
  const response = await api.get("/challenges/browse");
  return response.data.data;
};

// 챌린지 상세 조회
export const getChallengeInfo = async (challengeId: number): Promise<ChallengeInfoResponse> => {
  const response = await api.get(`/challenges/${challengeId}`);
  return response.data.data;
};
