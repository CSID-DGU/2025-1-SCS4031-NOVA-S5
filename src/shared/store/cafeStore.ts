import { create } from 'zustand';

export interface Cafe {
  cafeId: number;
  cafeName: string;
  cafeImage?: string;
  latitude: number;
  longitude: number;
  cafePhone: string | null;
  maxStampCount: number;
  isOpenNow: boolean;
  openHours: any[];
  specialDays: any[];
  downloadCount: number;

}

interface CafeStore {
  cafes: Cafe[];
  setCafes: (cafes: Cafe[]) => void;
}

export const useCafeStore = create<CafeStore>((set) => ({
  cafes: [],
  setCafes: (cafes) => set({ cafes }),
})); 