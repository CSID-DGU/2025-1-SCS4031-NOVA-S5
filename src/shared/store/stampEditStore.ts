import { create } from "zustand";

interface StampEditState {
  frontName: string;
  backName: string;
  backImageUrl: string;
  setFrontName: (name: string) => void;
  setBackName: (name: string) => void;
  setBackImageUrl: (url: string) => void;
}

export const useStampEditStore = create<StampEditState>(set => ({
  frontName: "",
  backName: "",
  backImageUrl: "",
  setFrontName: (name: string) => set({ frontName: name }),
  setBackName: (name: string) => set({ backName: name }),
  setBackImageUrl: (url: string) => set({ backImageUrl: url }),
}));
