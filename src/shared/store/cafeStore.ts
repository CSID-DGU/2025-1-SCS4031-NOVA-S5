import { create } from "zustand";

export interface OpenHour {
  dayOfWeek: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  lastOrder: string;
}

export interface Cafe {
  cafeId: number;
  cafeName: string;
  cafeImage?: string;
  branchName: string;
  cafeIntroduction: string;
  conceptIntroduction: string;
  maxStampCount: number;
  latitude: number;
  longitude: number;
  cafePhone: string | null;
  characterType: "BLACK" | "ORANGE" | "YELLOW" | "GREEN"; // enum이면 더 명확하게 지정 가능
  openHours: OpenHour[];
}

interface CafeStore {
  cafes: Cafe[];
  setCafes: (cafes: Cafe[]) => void;
}

export const useCafeStore = create<CafeStore>(set => ({
  cafes: [],
  setCafes: cafes => set({ cafes }),
}));
