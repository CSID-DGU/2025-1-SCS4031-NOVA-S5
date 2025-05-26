import { create } from "zustand";

interface StampEditState {
  frontName: string;
  backName: string;
  setFrontName: (name: string) => void;
  setBackName: (name: string) => void;
}

export const useStampEditStore = create<StampEditState>(set => ({
  frontName: "",
  backName: "",
  setFrontName: (name: string) => set({ frontName: name }),
  setBackName: (name: string) => set({ backName: name }),
}));
