import { create } from "zustand";
import { StampBookState } from "@/features/main/model/stampBookType";

export const useStampBookStore = create<StampBookState>(set => ({
  stampBooks: [
    {
      id: 1,
      cafeName: "충무로 더블톤",
      rewardItem: "아메리카노",
      totalStamp: 10,
      remainingStamp: 4,
      characterType: "yellow",
    },
    {
      id: 2,
      cafeName: "망원 우주커피",
      rewardItem: "라떼",
      totalStamp: 10,
      remainingStamp: 7,
      characterType: "green",
    },
    {
      id: 3,
      cafeName: "연남 핸즈커피",
      rewardItem: "바닐라라떼",
      totalStamp: 10,
      remainingStamp: 2,
      characterType: "orange",
    },
    {
      id: 4,
      cafeName: "합정 카페마마스",
      rewardItem: "카푸치노",
      totalStamp: 10,
      remainingStamp: 5,
      characterType: "beige",
    },
    {
      id: 5,
      cafeName: "상수 테라로사",
      rewardItem: "에스프레소",
      totalStamp: 10,
      remainingStamp: 1,
      characterType: "yellow",
    },
    {
      id: 6,
      cafeName: "성수 커피창고",
      rewardItem: "콜드브루",
      totalStamp: 10,
      remainingStamp: 6,
      characterType: "orange",
    },
  ],
  setStampBooks: books => set({ stampBooks: books }),
}));
