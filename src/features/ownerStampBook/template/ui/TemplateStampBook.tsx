"use client";

import Image from "next/image";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";

interface TemplateStampBookProps {
  frontName: string;
}

export default function TemplateStampBook({ frontName }: TemplateStampBookProps) {
  const { selectedCafe } = useSelectedCafe();
  const totalStamps = 10;
  const stampedCount = 3;
  const characterType = selectedCafe?.characterType?.toLowerCase() || "yellow";

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{frontName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamps }).map((_, index) => (
          <Image
            key={index}
            src={
              index < stampedCount
                ? `/img/character/${characterType}-face.svg`
                : `/img/character/${characterType}-face-gray.svg`
            }
            alt="stamp"
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
