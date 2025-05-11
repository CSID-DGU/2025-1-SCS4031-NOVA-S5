export interface StampHistory {
  stampBookId: number;
  cafeName: string;
  stampDates: string[]; // ISO date string
  stampCount: number;
  maxStampCount: number;
  isCompleted: boolean;
  completedAt: string | null;
  rewardClaimed: boolean;
  rewardClaimedAt: string | null;
}

export interface UserData {
  profilePictureUrl: string;
  name: string;
  characterType: "BLACK" | "GREEN" | "YELLOW" | "ORANGE";
  rewardCount: number;
  history: StampHistory[];
  recentStamps: any[]; // 구조가 확정되면 `RecentStamp[]`로 교체
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
