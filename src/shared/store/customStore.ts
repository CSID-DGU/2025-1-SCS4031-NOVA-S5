import { create } from "zustand";

interface CustomState {
  frontBackground: string;
  backBackground: string;
  frontImage: File | null;
  backImage: File | null;
  selectedSide: "front" | "back";
  modalType: "color" | "image" | null;
  isModalOpen: boolean;
  showColorPicker: boolean;
  setFrontBackground: (color: string) => void;
  setBackBackground: (color: string) => void;
  setFrontImage: (file: File | null) => void;
  setBackImage: (file: File | null) => void;
  setSelectedSide: (side: "front" | "back") => void;
  setModalType: (type: "color" | "image" | null) => void;
  setShowColorPicker: (show: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useCustomStore = create<CustomState>(set => ({
  frontBackground: "#FFFDF7",
  backBackground: "#FFFDF7",
  frontImage: null,
  backImage: null,
  selectedSide: "front",
  modalType: null,
  isModalOpen: false,
  showColorPicker: false,
  setFrontBackground: color => set({ frontBackground: color }),
  setBackBackground: color => set({ backBackground: color }),
  setFrontImage: file => set({ frontImage: file }),
  setBackImage: file => set({ backImage: file }),
  setSelectedSide: side => set({ selectedSide: side }),
  setModalType: type => set({ modalType: type }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setShowColorPicker: show => set({ showColorPicker: show }),
}));
