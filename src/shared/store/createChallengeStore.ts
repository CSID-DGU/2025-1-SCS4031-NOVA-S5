import { create } from 'zustand';
import { DateRange } from 'react-day-picker';

interface CreateChallengeState {
  challengeType: string;
  reward: string;
  dateRange: DateRange | undefined;
  file: File | undefined;
  setChallengeType: (type: string) => void;
  setReward: (reward: string) => void;
  setDateRange: (dateRange: DateRange | undefined) => void;
  setFile: (file: File | undefined) => void;
  resetForm: () => void;
}

export const useCreateChallengeStore = create<CreateChallengeState>((set) => ({
  challengeType: '',
  reward: '',
  dateRange: undefined,
  file: undefined,
  setChallengeType: (type) => set({ challengeType: type }),
  setReward: (reward) => set({ reward }),
  setDateRange: (dateRange) => set({ dateRange }),
  setFile: (file) => set({ file }),
  resetForm: () => set({
    challengeType: '',
    reward: '',
    dateRange: undefined,
    file: undefined,
  }),
})); 