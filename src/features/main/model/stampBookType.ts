export type StampBook = {
  stampBookId: number;
  cafeId: number;
  cafeName: string;
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BEIGE";
  isCompleted: boolean;
  rewardClaimed: boolean;
  rewardDescription: string;
  inHome: boolean;
  createdAt: string;
  currentStampCount: number;
  maxStampCount: number;
  remainingStampCount: number;
  isCustomized: boolean;
  stampBookDesign: string;
};

export interface StampBookState {
  stampBooks: StampBook[];
  setStampBooks: (books: StampBook[]) => void;
}
