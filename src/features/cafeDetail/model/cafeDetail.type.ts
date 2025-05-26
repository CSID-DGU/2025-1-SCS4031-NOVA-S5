export interface CafeDetail {
  cafeId: number;
  cafeName: string;
  branchName: string;
  cafeIntroduction: string;
  maxStampCount: number;
  latitude: number;
  longitude: number;
  cafePhone: string | null;
  characterType: "BLACK" | "ORANGE" | "YELLOW" | "GREEN";
  stampBookName: string;
  conceptIntroduction: string;
  rewardDescription: string;
  stampBookDesignJson: string | null;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
