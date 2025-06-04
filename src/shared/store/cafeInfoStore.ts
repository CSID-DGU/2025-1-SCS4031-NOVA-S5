import { create } from "zustand";
import { fetchCafes } from "@/shared/api/cafe";

export interface CafeInfo {
  cafeId: number;
  cafeName: string;
  cafePhone: string;
  address: string;
  openHours: {
    dayOfWeek: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
  }[];
  specialDays: {
    specialDate: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    note: string;
  }[];
  lastOrder: string;
  isOpenNow: boolean;
}

interface CafeInfoState {
  cafes: CafeInfo[];
  fetchAndSetCafes: () => Promise<void>;
}

export const useCafeInfoStore = create<CafeInfoState>(set => ({
  cafes: [],
  fetchAndSetCafes: async () => {
    try {
      const data = await fetchCafes();

      const cafes = data.map((cafe: any) => {
        const now = new Date();
        const today = now.getDay();
        const todayStr = [
          "SUNDAY",
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY",
        ][today];

        let openTime: string | null = null;
        let closeTime: string | null = null;
        let lastOrder: string | null = null;
        let isOpenNow = false;

        const todayDateStr = now.toISOString().split("T")[0];
        const todaySpecial = cafe.specialDays?.find((day: any) => day.specialDate === todayDateStr);

        if (todaySpecial) {
          if (todaySpecial.isOpen && todaySpecial.openTime && todaySpecial.closeTime) {
            openTime = todaySpecial.openTime?.slice(0, 5) ?? null;
            closeTime = todaySpecial.closeTime?.slice(0, 5) ?? null;
            lastOrder = todaySpecial.lastOrder?.slice(0, 5) ?? null;
            const [openHour, openMin] = todaySpecial.openTime.split(":").map(Number);
            const [closeHour, closeMin] = todaySpecial.closeTime.split(":").map(Number);
            const openDate = new Date(now);
            openDate.setHours(openHour, openMin);
            const closeDate = new Date(now);
            closeDate.setHours(closeHour, closeMin);
            isOpenNow = now >= openDate && now <= closeDate;
          }
        } else {
          const todayHours = cafe.openHours?.find((h: any) => h.dayOfWeek === todayStr);
          if (todayHours?.isOpen && todayHours.openTime && todayHours.closeTime) {
            openTime = todayHours.openTime?.slice(0, 5) ?? null;
            closeTime = todayHours.closeTime?.slice(0, 5) ?? null;
            lastOrder = todayHours.lastOrder?.slice(0, 5) ?? null;
            const [openHour, openMin] = todayHours.openTime.split(":").map(Number);
            const [closeHour, closeMin] = todayHours.closeTime.split(":").map(Number);
            const openDate = new Date(now);
            openDate.setHours(openHour, openMin);
            const closeDate = new Date(now);
            closeDate.setHours(closeHour, closeMin);
            isOpenNow = now >= openDate && now <= closeDate;
          }
        }

        return {
          cafeId: cafe.cafeId,
          cafeName: cafe.cafeName,
          cafePhone: cafe.cafePhone,
          address: cafe.address || "주소 정보 없음",
          openHours: openTime && closeTime ? `${openTime} ~ ${closeTime}` : null,
          lastOrder,
          isOpenNow,
        };
      });

      set({ cafes });
    } catch (error) {
      console.error("카페 정보 가져오기 실패", error);
    }
  },
}));
