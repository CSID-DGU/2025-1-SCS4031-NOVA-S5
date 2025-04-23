import { create } from "zustand";

interface RewardState {
  rewardCounts: { [stampBookId: number]: number };
  setRewardCount: (id: number, count: number) => void;
}

export const useRewardStore = create<RewardState>(set => ({
  rewardCounts: {
    1: 1,
    2: 0,
    3: 2,
    4: 1,
    5: 0,
    6: 3,
  },
  setRewardCount: (id, count) =>
    set(state => ({
      rewardCounts: { ...state.rewardCounts, [id]: count },
    })),
}));
