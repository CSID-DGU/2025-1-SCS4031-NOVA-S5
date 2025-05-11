import { create } from "zustand";

interface StampEditState {
  frontName: string;
  backName: string;
  setFrontName: (name: string) => void;
  setBackName: (name: string) => void;
}

export const useStampEditStore = create<StampEditState>(set => ({
  frontName: "충무로 더블톤", // 여기 이름은 추후에 query에서 가져오기
  setFrontName: frontName => set({ frontName }),
  backName: "충무로 더블톤",
  setBackName: backName => set({ backName }),
}));
