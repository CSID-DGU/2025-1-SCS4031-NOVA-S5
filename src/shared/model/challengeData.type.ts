export interface ChallengeData {
  challengeId: number;
  type: string;
  rewardDescription: string;
  startDate: string;
  endDate: string;
  thumbnailUrl: string;
  cafeId: number;
  cafeName: string;
}

export interface ChallengeResponse {
  base: ChallengeData;
}

export interface ChallengeInfoResponse extends ChallengeData {
  inProgressCount: number;
  canceledCount: number;
  rewardedCount: number;
}
