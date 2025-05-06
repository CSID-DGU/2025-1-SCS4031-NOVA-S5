import { create } from "zustand";

type InfoMode = "stamp" | "challenge";

interface InfoModeState {
  infoMode: InfoMode;
  setInfoMode: (mode: InfoMode) => void;
}

export const useInfoModeStore = create<InfoModeState>(set => ({
  infoMode: "stamp",
  setInfoMode: mode => set({ infoMode: mode }),
}));
