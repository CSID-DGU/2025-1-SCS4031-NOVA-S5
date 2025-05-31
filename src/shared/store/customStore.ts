import { create } from "zustand";

export interface CustomText {
  id: string;
  text: string;
  color: string;
  font: string;
  side: "front" | "back";
  x: number;
  y: number;
}

interface CustomState {
  frontBackground: string;
  backBackground: string;
  frontImage: File | null;
  backImage: File | null;
  selectedSide: "front" | "back" | null;
  modalType: "color" | "image" | "text" | null;
  isModalOpen: boolean;
  showBackgroundColorPicker: boolean;
  showTextColorPicker: boolean;
  tempBackgroundColor: string;
  textColor: string;
  isTextBottomSheetOpen: boolean;
  selectedFont: string | null;
  showText: boolean;
  texts: CustomText[];

  setFrontBackground: (color: string) => void;
  setBackBackground: (color: string) => void;
  setFrontImage: (file: File | null) => void;
  setBackImage: (file: File | null) => void;
  setSelectedSide: (side: "front" | "back" | null) => void;
  setModalType: (type: "color" | "image" | "text" | null) => void;
  setIsModalOpen: (open: boolean) => void;
  setShowBackgroundColorPicker: (show: boolean) => void;
  setShowTextColorPicker: (show: boolean) => void;
  setTempBackgroundColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setIsTextBottomSheetOpen: (open: boolean) => void;
  setSelectedFont: (font: string | null) => void;
  setShowText: (show: boolean) => void;
  addText: (text: CustomText) => void;
  removeText: (id: string) => void;
  updateText: (id: string, props: Partial<CustomText>) => void;
  resetStore: () => void;
  pushHistory: () => void;
  undo: () => void;
  redo: () => void;
  history: Partial<CustomState>[];
  redoStack: Partial<CustomState>[];
}

export const useCustomStore = create<CustomState>((set, get) => ({
  frontBackground: "#FFFDF7",
  backBackground: "#FFFDF7",
  frontImage: null,
  backImage: null,
  selectedSide: null,
  modalType: null,
  isModalOpen: false,
  showBackgroundColorPicker: false,
  showTextColorPicker: false,
  tempBackgroundColor: "#FFFDF7",
  textColor: "#B5CDB7",
  isTextBottomSheetOpen: false,
  selectedFont: null,
  showText: false,
  texts: [],
  history: [],
  redoStack: [],

  pushHistory: () => {
    const { frontBackground, backBackground, frontImage, backImage, texts, history } = get();
    set({
      history: [
        ...history,
        {
          frontBackground,
          backBackground,
          frontImage,
          backImage,
          texts: JSON.parse(JSON.stringify(texts)),
        },
      ],
      redoStack: [],
    });
  },

  undo: () => {
    const { history, redoStack, frontBackground, backBackground, frontImage, backImage, texts } =
      get();
    if (history.length === 0) return;

    const prevState = history[history.length - 1];
    set({
      ...prevState,
      history: history.slice(0, -1),
      redoStack: [
        ...redoStack,
        {
          frontBackground,
          backBackground,
          frontImage,
          backImage,
          texts: JSON.parse(JSON.stringify(texts)),
        },
      ],
    });
  },

  redo: () => {
    const { redoStack, history, frontBackground, backBackground, frontImage, backImage, texts } =
      get();
    if (redoStack.length === 0) return;

    const nextState = redoStack[redoStack.length - 1];
    set({
      ...nextState,
      redoStack: redoStack.slice(0, -1),
      history: [
        ...history,
        {
          frontBackground,
          backBackground,
          frontImage,
          backImage,
          texts: JSON.parse(JSON.stringify(texts)),
        },
      ],
    });
  },

  setFrontBackground: color => {
    get().pushHistory();
    set({ frontBackground: color });
  },

  setBackBackground: color => {
    get().pushHistory();
    set({ backBackground: color });
  },

  setFrontImage: file => {
    get().pushHistory();
    set({ frontImage: file });
  },

  setBackImage: file => {
    get().pushHistory();
    set({ backImage: file });
  },

  setSelectedSide: side => set({ selectedSide: side }),
  setModalType: type => set({ modalType: type }),
  setIsModalOpen: open => set({ isModalOpen: open }),
  setShowBackgroundColorPicker: show => set({ showBackgroundColorPicker: show }),
  setShowTextColorPicker: show => set({ showTextColorPicker: show }),
  setTempBackgroundColor: color => set({ tempBackgroundColor: color }),
  setTextColor: color => set({ textColor: color }),
  setIsTextBottomSheetOpen: open => set({ isTextBottomSheetOpen: open }),
  setSelectedFont: font => set({ selectedFont: font }),
  setShowText: show => set({ showText: show }),

  addText: text => {
    get().pushHistory();
    set(state => ({ texts: [...state.texts, text] }));
  },

  removeText: id => {
    get().pushHistory();
    set(state => ({ texts: state.texts.filter(t => t.id !== id) }));
  },

  updateText: (id, props) => {
    get().pushHistory();
    set(state => ({
      texts: state.texts.map(t => (t.id === id ? { ...t, ...props } : t)),
    }));
  },

  resetStore: () =>
    set({
      frontBackground: "#FFFDF7",
      backBackground: "#FFFDF7",
      frontImage: null,
      backImage: null,
      selectedSide: null,
      modalType: null,
      isModalOpen: false,
      showBackgroundColorPicker: false,
      showTextColorPicker: false,
      tempBackgroundColor: "#FFFDF7",
      textColor: "#B5CDB7",
      isTextBottomSheetOpen: false,
      selectedFont: null,
      showText: false,
      texts: [],
      history: [],
      redoStack: [],
    }),
}));
