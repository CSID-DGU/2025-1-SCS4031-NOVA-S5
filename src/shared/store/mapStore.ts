import { create } from "zustand";

interface MapStore {
  updateCenter: ((address: string) => void) | null;
  setUpdateCenter: (updateCenter: ((address: string) => void) | null) => void;
  currentAddress: string | null;
  setCurrentAddress: (address: string) => void;
}

export const useMapStore = create<MapStore>(set => ({
  updateCenter: null,
  setUpdateCenter: updateCenter => set({ updateCenter }),
  currentAddress: null,
  setCurrentAddress: address => set({ currentAddress: address }),
})); 