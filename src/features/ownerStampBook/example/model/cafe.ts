export interface Cafe {
  cafeId: number;
  cafeName: string;
  latitude: number;
  longitude: number;
  cafePhone: string;
  cafeIntroduction: string;
  maxStampCount: number;
  characterType: string;
  rewardDescription: string;
  isOpenNow: boolean;
  registrationStatus: string;
  roadAddress?: string;
  openHours: {
    dayOfWeek: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    lastOrder: string;
  }[];
  specialDays: {
    specialDate: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    lastOrder: string;
    note: string;
  }[];
}
