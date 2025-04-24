import { create } from "zustand";

interface StampInfo {
  cafe_name: string;
  logo: string;
  cover_img_url: string;
}

interface CafeInfo {
  name: string;
  business_hour: string;
  tel: string;
  address: string;
  reward: string;
  cafa_img: string;
  cafe_detail: string;
  desc: string;
  character: string;
  stamp: StampInfo;
}

interface CafeState {
  cafe: CafeInfo | null;
  setCafe: (date: CafeInfo) => void;
  clearCafe: () => void;
}

export const useCafeStore = create<CafeState>(set => ({
  cafe: null,
  setCafe: data => set({ cafe: data }),
  clearCafe: () => set({ cafe: null }),
}));
