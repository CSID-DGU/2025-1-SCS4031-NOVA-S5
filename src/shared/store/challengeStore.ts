import { create } from "zustand";
import { ChallengeState } from "@/features/main/model/challengeType";

export const useChallengeStore = create<ChallengeState>(set => ({
  challenges: [
    { id: 1, challengeTitle: "텀블러에 음료 담기", currentDay: 8, totalDay: 10 },
    { id: 2, challengeTitle: "손수건 챙기기", currentDay: 5, totalDay: 7 },
    { id: 3, challengeTitle: "플라스틱 빨대 사용 안 하기", currentDay: 2, totalDay: 5 },
    { id: 4, challengeTitle: "비건 식단 도전", currentDay: 10, totalDay: 14 },
    { id: 5, challengeTitle: "대중교통 이용하기", currentDay: 6, totalDay: 10 },
    { id: 6, challengeTitle: "일회용 컵 안 쓰기", currentDay: 4, totalDay: 7 },
    { id: 7, challengeTitle: "제로웨이스트 마켓 가보기", currentDay: 1, totalDay: 3 },
    { id: 8, challengeTitle: "장바구니 사용하기", currentDay: 9, totalDay: 10 },
  ],
  setChallenges: challenges => set({ challenges: challenges }),
}));
