import { create } from "zustand";

type ViewMode = "list" | "map";

interface ViewModeState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useViewModeStore = create<ViewModeState>(set => ({
  viewMode: "list",
  setViewMode: mode => set({ viewMode: mode }),
}));
