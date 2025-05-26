import { create } from "zustand";
import { useCustomStore } from "./customStore";
import { Stage as KonvaStage } from "konva/lib/Stage";

interface CreateStampState {
  stampBookName: string;
  cafeIntroduction: string;
  conceptIntroduction: string;
  rewardDescription: string;
  designJson: string | null;
  exposed: boolean | null;
  frontStageRef: React.RefObject<KonvaStage> | null;
  backStageRef: React.RefObject<KonvaStage> | null;
  setStampBookName: (name: string) => void;
  setCafeIntroduction: (intro: string) => void;
  setConceptIntroduction: (intro: string) => void;
  setRewardDescription: (desc: string) => void;
  setDesignJson: (json: CreateStampState["designJson"]) => void;
  setFrontStageRef: (ref: React.RefObject<KonvaStage>) => void;
  setBackStageRef: (ref: React.RefObject<KonvaStage>) => void;
  setExposed: (exposed: boolean) => void;
  saveDesignToJson: () => void;
  resetStore: () => void;
}

export const useCreateStampStore = create<CreateStampState>((set, get) => ({
  stampBookName: "",
  cafeIntroduction: "",
  conceptIntroduction: "",
  rewardDescription: "",
  designJson: null,
  frontStageRef: null,
  backStageRef: null,
  exposed: null,
  setStampBookName: (name: string) => set({ stampBookName: name }),
  setCafeIntroduction: (intro: string) => set({ cafeIntroduction: intro }),
  setConceptIntroduction: (intro: string) => set({ conceptIntroduction: intro }),
  setRewardDescription: (desc: string) => set({ rewardDescription: desc }),
  setDesignJson: (json: CreateStampState["designJson"]) => set({ designJson: json }),
  setFrontStageRef: (ref: React.RefObject<KonvaStage>) => set({ frontStageRef: ref }),
  setBackStageRef: (ref: React.RefObject<KonvaStage>) => set({ backStageRef: ref }),
  setExposed: (exposed: boolean) => set({ exposed: exposed }),
  resetStore: () =>
    set({
      stampBookName: "",
      cafeIntroduction: "",
      conceptIntroduction: "",
      rewardDescription: "",
      designJson: null,
      frontStageRef: null,
      backStageRef: null,
      exposed: null,
    }),
  saveDesignToJson: () => {
    const customStore = useCustomStore.getState();
    const { frontBackground, backBackground, frontImage, backImage, texts } = customStore;
    const { frontStageRef, backStageRef } = get();

    const frontStage = frontStageRef?.current;
    const backStage = backStageRef?.current;

    if (!frontStage || !backStage) {
      console.error("Stage refs are not properly set");
      return;
    }

    const designData = {
      front: {
        backgroundColor: frontBackground,
        backgroundImage: frontImage ? URL.createObjectURL(frontImage) : null,
        texts: texts
          .filter(t => t.side === "front")
          .map(({ id, text, x, y, color, font, side }) => ({
            id,
            text,
            x,
            y,
            color,
            font,
            side,
          })),
        stage: frontStage,
      },
      back: {
        backgroundColor: backBackground,
        backgroundImage: backImage ? URL.createObjectURL(backImage) : null,
        texts: texts
          .filter(t => t.side === "back")
          .map(({ id, text, x, y, color, font, side }) => ({
            id,
            text,
            x,
            y,
            color,
            font,
            side,
          })),
        stage: backStage,
      },
    };

    set({ designJson: JSON.stringify(designData) });
  },
}));
