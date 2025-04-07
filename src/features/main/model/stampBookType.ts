export type StampBook = {
  id: number;
  cafeName: string;
  rewardItem: string;
  totalStamp: number;
  remainingStamp: number;
  characterType: "yellow" | "green" | "orange" | "beige";
};

export interface StampBookState {
  stampBooks: StampBook[];
  setStampBooks: (books: StampBook[]) => void;
}
