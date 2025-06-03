"use client";

import Image from "next/image";
import Chip from "./Chip";
import CharacterBgCard from "./CharacterBgCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeStampBookExposed, getStampBookList } from "@/shared/api/stampbook";
import Hamburger from "./Hamburger";
import { useState } from "react";
import dynamic from "next/dynamic";
import Modal from "@/shared/ui/modal/Modal";

const OwnerStampBook = dynamic(() => import("@/features/ownerStampBook/ui/OwnerStampBook"), {
  ssr: false,
});

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

interface HamburgerPosition {
  designId: number;
  top: number;
  right: number;
}

export default function StampBookList() {
  const router = useRouter();
  const [hamburgerPosition, setHamburgerPosition] = useState<HamburgerPosition | null>(null);
  const [pendingExposeId, setPendingExposeId] = useState<number | null>(null);

  const queryClient = useQueryClient();
  const { data: stampBooks = [] } = useQuery<StampBookItem[]>({
    queryKey: ["stampBooks"],
    queryFn: getStampBookList,
  });

  const { mutate: changeExposed } = useMutation({
    mutationFn: async () => {
      if (pendingExposeId == null) return;
      const book = stampBooks.find(b => b.designId === pendingExposeId);
      if (!book) return;
      await changeStampBookExposed(book.designId, !book.exposed);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stampBooks"] });
      setPendingExposeId(null);
    },
  });

  const hasBooks = stampBooks.length > 0;
  const selectedBook = stampBooks.find(book => book.designId === hamburgerPosition?.designId);
  const pendingBook = stampBooks.find(book => book.designId === pendingExposeId);
  const currentExposedBook = stampBooks.find(book => book.exposed);

  const handleHamburgerClick = (e: React.MouseEvent<HTMLImageElement>, designId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHamburgerPosition({
      designId,
      top: rect.bottom + window.scrollY,
      right: window.innerWidth - rect.right,
    });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-5 mt-[30px] mb-[100px]">
        {hasBooks ? (
          <div className="w-full flex flex-col gap-5">
            {stampBooks.map(book => (
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
                          onClick={e => handleHamburgerClick(e, book.designId)}
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <OwnerStampBook designJson={book.stampBookDesignJson} />
                </div>
              </div>
            ))}
            <Image
              src={"/icon/plus.svg"}
              alt="plus"
              width={35}
              height={35}
              className="cursor-pointer mx-auto"
              onClick={() => router.push("/owner/stampbook/create")}
            />
          </div>
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

        {selectedBook && hamburgerPosition && (
          <Hamburger
            isOpen={true}
            onClose={() => setHamburgerPosition(null)}
            position={hamburgerPosition}
            onExposeRequest={() => setPendingExposeId(selectedBook.designId)}
          />
        )}
      </div>
      <Modal
        isOpen={pendingExposeId !== null}
        setIsOpen={() => setPendingExposeId(null)}
        characterType={pendingBook?.characterType}
        button="double"
        mainText={
          <p className="text-md text-font-green font-bold text-center">
            '{pendingBook?.stampBookName}'을 노출하시겠어요?
          </p>
        }
        subText={
          <p className="text-sm text-[#8E8E93] font-semibold text-center">
            '네'를 클릭하면 {currentExposedBook?.exposed}의 노출이
            <br />
            종료되고 '{pendingBook?.stampBookName}'이 노출돼요.
          </p>
        }
        leftButtonText="아니요"
        rightButtonText="네"
        onRightButtonClick={() => changeExposed()}
      />
    </>
  );
}
