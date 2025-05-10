import { create } from 'zustand';

interface CancelState {
  cancelType: 'stampcancel' | 'challengecancel' | null;
  scannedUuid: string | null;
  setCancelType: (type: 'stampcancel' | 'challengecancel' | null) => void;
  setScannedUuid: (uuid: string | null) => void;
  reset: () => void;
}

export const useCancelStore = create<CancelState>((set) => ({
  cancelType: null,
  scannedUuid: null,
  setCancelType: (type) => set({ cancelType: type }),
  setScannedUuid: (uuid) => set({ scannedUuid: uuid }),
  reset: () => set({ cancelType: null, scannedUuid: null }),
}));