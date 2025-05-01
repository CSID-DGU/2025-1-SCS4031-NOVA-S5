export type StampBook = {
  stampBookId: number;
  cafeId: number;
  cafeName: string;
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BEIGE";
  isCompleted: boolean;
  rewardClaimed: boolean;
  inHome: boolean;
  createdAt: string;
  currentStampCount: number;
  maxStampCount: number;
  remainingStampCount: number;
};

export interface StampBookState {
  stampBooks: StampBook[];
  setStampBooks: (books: StampBook[]) => void;
}
