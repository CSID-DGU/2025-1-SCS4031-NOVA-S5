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
  cafe_img: string;
  cafe_detail: string;
  desc: string;
  character: "YELLOW" | "GREEN" | "ORANGE" | "BLACK" | "";
  stamp: StampInfo;
  stampBookDesignJson: string;
  frontCafeName: string;
  backCafeName: string;
  backImageUrl: string;
}

interface CafeStore {
  cafe: CafeInfo | null;
  setCafe: (cafe: CafeInfo) => void;
}

export const useCafeStore = create<CafeStore>(set => ({
  cafe: {
    name: "",
    business_hour: "",
    tel: "",
    address: "",
    reward: "",
    cafe_img: "",
    cafe_detail: "",
    desc: "",
    character: "",
    stamp: {
      cafe_name: "",
      logo: "",
      cover_img_url: "",
    },
    stampBookDesignJson: "",
    frontCafeName: "",
    backCafeName: "",
    backImageUrl: "",
  },
  setCafe: cafe => set({ cafe }),
}));
