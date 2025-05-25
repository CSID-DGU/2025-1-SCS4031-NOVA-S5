"use client";

import Image from "next/image";
import Chip from "./Chip";
import OwnerStampBook from "./OwnerStampBook";
import CharacterBgCard from "./CharacterBgCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getStampBookList } from "@/shared/api/stampbook";

interface StampBookItem {
  designId: number;
  stampBookName: string;
  exposed: boolean;
  cafeIntroduction: string;
  conceptIntroduction: string;
  rewardDescription: string;
  stampBookDesignJson: string;
  characterType: string;
}

export default function StampBookList() {
  const router = useRouter();
  const { data: stampBooks = [] } = useQuery<StampBookItem[]>({
    queryKey: ["stampBooks"],
    queryFn: getStampBookList,
  });

  const hasBooks = stampBooks.length > 0;

  return (
    <div className="flex flex-col gap-5 mt-[30px]">
      {hasBooks ? (
        stampBooks.map(book => (
          <div key={book.designId} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-[10px] items-center">
                <p className="text-lg text-font-green font-extrabold">{book.stampBookName}</p>
                {book.exposed && <Chip />}
              </div>

              <div className="flex gap-[10px] items-center">
                <Image
                  src="/icon/pencil.svg"
                  width={15}
                  height={15}
                  alt="pencil"
                  className="cursor-pointer"
                />
                {!book.exposed && (
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
              <p className="text-xs text-[#8E8E93] font-semibold">
                카페의 특색을 담은 스탬프북을 만들어 주세요!
              </p>
            </div>
          }
          bottom={
            <Button
              className="w-[120px] h-[36px] rounded-full bg-font-green text-[#fff] text-xs font-bold text-center"
              onClick={() => router.push("/owner/stampbook/create")}>
              스탬프북 만들기
            </Button>
          }
        />
      )}
    </div>
  );
}
