import { create } from "zustand";
import { StampBook, StampBookState } from "@/features/main/model/stampBookType";
import { addHomeStampBook, fetchMyStampBooks, removeHomeStampBook } from "@/shared/api/stampbook";

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

  toggleInHome: async (cafeId: number) => {
    set(state => {
      const book = state.stampBooks.find(b => b.cafeId === cafeId);
      if (!book) return state;

      const updatedBooks = state.stampBooks.map(b =>
        b.cafeId === cafeId ? { ...b, inHome: !b.inHome } : b
      );

      // API 요청
      if (book.inHome) {
        removeHomeStampBook(book.stampBookId).catch(err => {
          console.error("홈에서 제거 실패:", err);
        });
      } else {
        addHomeStampBook(book.stampBookId).catch(err => {
          console.error("홈에 추가 실패:", err);
        });
      }

      return { stampBooks: updatedBooks };
    });
  },
}));
