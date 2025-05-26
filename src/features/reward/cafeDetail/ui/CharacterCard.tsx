"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import QrModal from "@/shared/ui/modal/QrModal";

export default function CharacterCard() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.cafeId === id));
  const characterType = book?.characterType === "BEIGE" ? "BLACK" : book?.characterType || "YELLOW";
  const type = characterType.toLowerCase();

  const characterInfo: Record<
    "YELLOW" | "ORANGE" | "BLACK" | "GREEN",
    { name: string; description: string }
  > = {
    YELLOW: {
      name: "팡이",
      description: "저는 아기자기한 카페의 스탬프를 찍어요!",
    },
    ORANGE: {
      name: "쿡이",
      description: "저는 알록달록한 카페의 스탬프를 찍어요!",
    },
    BLACK: {
      name: "콕이",
      description: "저는 힙한 카페의 스탬프를 찍어요!",
    },
    GREEN: {
      name: "꼭이",
      description: "저는 모던한 카페의 스탬프를 찍어요!",
    },
  };

  const { name, description } = characterInfo[characterType];

  return (
    <div className="relative w-full items-center justify-center h-[68px] flex gap-[10px]">
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={`/icon/${type}-qr.svg`}
          alt="qr"
          width={41}
          height={41}
          className="absolute -top-[25px] left-2"
        />
        <Image
          src={`/img/character/${type}-all.svg`}
          alt="캐릭터 이미지"
          width={52}
          height={59}
          style={{ width: 52, height: 59 }}
          className="ml-[22px]"
        />
      </div>
      <div className="w-[234px] h-full flex flex-col gap-[10px] px-[10px] py-[14px] bg-yellow-300 rounded-xl">
        <div className="flex gap-[5px] items-center">
          <Image src={`/icon/${type}-hand.svg`} alt="손" width={15} height={15} />
          <p className="text-xs text-font-black font-semibold">제 이름은 {name}예요!</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <Image src={`/icon/${type}-stamp.svg`} alt="도장" width={15} height={15} />
          <p className="text-xs text-font-black font-semibold">{description}</p>
        </div>
      </div>
      <QrModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
