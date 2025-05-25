import { create } from "zustand";

interface StampEditState {
  frontName: string;
  setFrontName: (name: string) => void;
}

export const useStampEditStore = create<StampEditState>(set => ({
  frontName: "",
  setFrontName: (name: string) => set({ frontName: name }),
}));
