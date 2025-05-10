import Image from "next/image";
import Chip from "./Chip";
import OwnerStampBook from "./OwnerStampBook";
import CharacterBgCard from "./CharacterBgCard";
import { Button } from "@/components/ui/button";

interface StampBookItem {
  id: number;
  title: string;
  isVisible: boolean;
}

const mockStampBooks: StampBookItem[] = [
  // { id: 1, title: "스탬프북 1번", isVisible: true },
  // { id: 2, title: "스탬프북 2번", isVisible: false },
];

export default function StampBookList() {
  const hasBooks = mockStampBooks.length > 0;

  return (
    <div className="flex flex-col gap-5 mt-[30px]">
      {hasBooks ? (
        mockStampBooks.map(book => (
          <div key={book.id} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-[10px] items-center">
                <p className="text-lg text-font-green font-extrabold">{book.title}</p>
                {book.isVisible && <Chip />}
              </div>

              <div className="flex gap-[10px] items-center">
                <Image
                  src="/icon/pencil.svg"
                  width={15}
                  height={15}
                  alt="pencil"
                  className="cursor-pointer"
                />
                {!book.isVisible && (
                  <>
                    <Image
                      src="/icon/bin.svg"
                      width={15}
                      height={15}
                      alt="bin"
                      className="cursor-pointer"
                    />
                    <Image
                      src="/icon/hamburger.svg"
                      width={15}
                      height={15}
                      alt="hamburger"
                      className="cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <OwnerStampBook />
            </div>
          </div>
        ))
      ) : (
        <CharacterBgCard
          top={
            <div className="flex flex-col gap-[10px] items-center">
              <p className="text-md text-font-green font-bold">아직 등록된 스탬프북이 없어요.</p>
              <p className="text-xs text-[#8E8E93] font-medium">
                카페의 특색을 담은 스탬프북을 만들어 주세요!
              </p>
            </div>
          }
          bottom={
            <Button className="w-[120px] h-[36px] rounded-full bg-font-green text-[#fff] text-xs font-bold text-center">
              스탬프북 만들기
            </Button>
          }
        />
      )}
    </div>
  );
}
