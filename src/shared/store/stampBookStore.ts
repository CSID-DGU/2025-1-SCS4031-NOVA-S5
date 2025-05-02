import { create } from "zustand";
import { StampBook, StampBookState } from "@/features/main/model/stampBookType";
import { fetchMyStampBooks } from "@/shared/api/stampbook";

export const useStampBookStore = create<
  StampBookState & {
    fetchAndSetStampBooks: () => Promise<void>;
    toggleInHome: (cafeId: number) => void;
  }
>(set => ({
  stampBooks: [],

  setStampBooks: (books: StampBook[]) => set({ stampBooks: books }),

  fetchAndSetStampBooks: async () => {
    try {
      const books = await fetchMyStampBooks();
      set({ stampBooks: books });
    } catch (error) {
      console.error("스탬프북 목록 가져오기 실패:", error);
    }
  },

  toggleInHome: (cafeId: number) =>
    set(state => ({
      stampBooks: state.stampBooks.map(book =>
        book.cafeId === cafeId ? { ...book, inHome: !book.inHome } : book
      ),
    })),
}));
