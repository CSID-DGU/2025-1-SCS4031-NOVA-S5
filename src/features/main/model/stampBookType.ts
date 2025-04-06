export type StampBook = {
  id: number;
  cafeName: string;
  rewardItem: string;
  totalStamp: number;
  remainingStamp: number;
};

export interface StampBookState {
  stampBooks: StampBook[];
  setStampBooks: (books: StampBook[]) => void;
}
