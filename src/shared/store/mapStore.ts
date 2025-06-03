import { create } from "zustand";

interface MapStore {
  updateCenter: ((address: string) => void) | null;
  setUpdateCenter: (updateCenter: ((address: string) => void) | null) => void;
  currentAddress: string;
  isCurrentLocation: boolean;
  setCurrentAddress: (address: string) => void;
  setIsCurrentLocation: (isCurrent: boolean) => void;
}

export const useMapStore = create<MapStore>(set => ({
  updateCenter: null,
  setUpdateCenter: updateCenter => set({ updateCenter }),
  currentAddress: "",
  isCurrentLocation: false,
  setCurrentAddress: (address: string) => set({ currentAddress: address }),
  setIsCurrentLocation: (isCurrent: boolean) => set({ isCurrentLocation: isCurrent }),
})); 