export interface OpenHour {
  dayOfWeek: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  isOpen: boolean;
  openTime: string; // 예: "08:00:00"
  closeTime: string; // 예: "21:00:00"
  lastOrder: string; // 예: "20:30:00"
}

export interface CafeDetail {
  cafeId: number;
  cafeName: string;
  branchName: string;
  cafeIntroduction: string | null;
  maxStampCount: number;
  latitude: number;
  longitude: number;
  roadAddress: string | null;
  cafePhone: string | null;
  characterType: "BLACK" | "ORANGE" | "YELLOW" | "GREEN";
  stampBookName: string;
  conceptIntroduction: string;
  rewardDescription: string;
  stampBookDesignJson: string | null;
  openHours: OpenHour[];
  frontCafeName: string;
  backCafeName: string;
  backImageUrl: string;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
