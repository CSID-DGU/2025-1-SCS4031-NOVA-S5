"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CharacterBgCard from "../../ui/CharacterBgCard";

type CharacterType = "YELLOW" | "GREEN" | "BEIGE" | "ORANGE";

interface CardProps {
  characterType?: CharacterType;
}

export default function CreateContent({ characterType = "YELLOW" }: CardProps) {
  const router = useRouter();
  const characterLower = characterType.toLowerCase();

  return (
    <section className="flex flex-col gap-[30px] mt-[30px]">
      <CharacterBgCard
        onClick={() => router.push("/owner/stampbook/template")}
        top={
          <Image
            src={`/img/character/${characterLower}-all.svg`}
            width={60}
            height={64}
            alt="character"
          />
        }
        bottom={
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <p className="text-md text-font-green font-bold">기본 제공 템플릿으로 만들기</p>
            <p className="text-xs text-[#8E8E93] font-semibold">사장님께 제공되는 특별한 선물!</p>
          </div>
        }
      />
      <CharacterBgCard
        onClick={() => router.push("/owner/stampbook/custom")}
        top={<Image src={"/icon/palette.svg"} width={60} height={60} alt="character" />}
        bottom={
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <p className="text-md text-font-green font-bold">우리 가게만의 스탬프북 디자인하기</p>
            <p className="text-xs text-[#8E8E93] font-semibold">세상에 단 하나 뿐인 스탬프북!</p>
          </div>
        }
      />
    </section>
  );
}
