import { create } from "zustand";

export type StampModalType = "register" | "delete" | "home-removed" | "delete-confirm" | null;

interface StampModalState {
  stampModalType: StampModalType;
  setStampModalType: (type: StampModalType) => void;
}

export const useStampModalStore = create<StampModalState>(set => ({
  stampModalType: null,
  setStampModalType: type => set({ stampModalType: type }),
}));
