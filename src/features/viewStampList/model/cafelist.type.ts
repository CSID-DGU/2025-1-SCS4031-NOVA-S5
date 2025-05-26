export interface GetCafesParams {
  approved?: boolean;
}

export interface CafeResponse {
  cafeId: number;
  cafeName: string;
  cafeImage?: string;
  branchName?: string;
  cafeIntroduction?: string;
  conceptIntroduction?: string;
  latitude: number;
  longitude: number;
  cafePhone: string;
  maxStampCount: number;
  characterType?: "BLACK" | "ORANGE" | "YELLOW" | "GREEN";
  isOpenNow: boolean;
  openHours: {
    dayOfWeek: string;
    isOpen: boolean;
    openTime: TimeObj;
    closeTime: TimeObj;
    lastOrder: TimeObj;
  }[];
  specialDays: {
    specialDate: string;
    isOpen: boolean;
    openTime: TimeObj;
    closeTime: TimeObj;
    lastOrder: TimeObj;
    note: string;
  }[];
  downloadCount: number;
}

interface TimeObj {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}
