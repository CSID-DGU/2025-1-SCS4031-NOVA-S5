import { create } from "zustand";

interface QRState {
  scannedUuid: string | null;
  setScannedUuid: (uuid: string | null) => void;
  reset: () => void;
}

export const useQRStore = create<QRState>(set => ({
  scannedUuid: null,
  setScannedUuid: uuid => set({ scannedUuid: uuid }),
  reset: () => set({ scannedUuid: null }),
}));
