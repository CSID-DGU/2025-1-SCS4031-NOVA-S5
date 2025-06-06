"use client";

import Image from "next/image";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";

export default function CharacterCard() {
  const { selectedCafe } = useSelectedCafe();
  const characterType = selectedCafe?.characterType?.toLowerCase() || "yellow";
  const type = characterType.toLowerCase();

  const characterInfo: Record<string, { name: string }> = {
    yellow: {
      name: "팡이",
    },
    orange: {
      name: "쿡이",
    },
    black: {
      name: "꼭이",
    },
    green: {
      name: "콕이",
    },
  };

  const { name } = characterInfo[characterType];

  return (
    <div className="w-full items-center justify-center h-[68px] flex gap-[10px]">
      <Image
        src={`/img/character/${type}-all.svg`}
        alt="캐릭터 이미지"
        width={52}
        height={59}
        style={{ width: 52, height: 59 }}
      />
      <div className="w-[234px] h-full flex flex-col gap-[10px] px-[10px] py-[14px] bg-yellow-300 rounded-xl">
        <div className="flex gap-[5px] items-center">
          <Image src={`/icon/${type}-hand.svg`} alt="손" width={15} height={15} />
          <p className="text-xs text-font-black font-semibold">
            저는 사장님 가게를 담당하는 {name}예요!
          </p>
        </div>
        <div className="flex gap-[5px] items-center">
          <Image src={`/icon/${type}-stamp.svg`} alt="도장" width={15} height={15} />
          <p className="text-xs text-font-black font-semibold">
            제가 만든 스탬프북을 선물로 드릴게요.
          </p>
        </div>
      </div>
    </div>
  );
}
