"use client";

import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useQuery } from "@tanstack/react-query";
import { getSelectedCafe } from "@/features/owner/service/api";
import { getSilhouetteInfo } from "@/shared/utils/getSilhouetteInfo";
import { SilhouetteColor } from "@/shared/model";

interface CafeCharacterProps {
  characterType?: string;
  isOwner?: boolean;
}

function CafeCharacter({ characterType, isOwner = false }: CafeCharacterProps) {
  const cafe = useCafeStore(state => state.cafe);
  const { data: selectedCafe } = useQuery({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
    enabled: isOwner,
  });

  const displayCharacterType = isOwner
    ? selectedCafe?.characterType?.toLowerCase()
    : cafe?.character?.toLowerCase() || "yellow";

  const [name, description] = getSilhouetteInfo(
    displayCharacterType?.toUpperCase() as SilhouetteColor
  );

  return (
    <div className="flex flex-col">
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        👀 어떤 캐릭터가 스탬프를 찍어줄까요?
      </p>
      <div className="flex flex-row gap-[10px]">
        <img
          src={`/img/silhouette/${displayCharacterType}.svg`}
          alt="character"
          width={90}
          height={101}
        />
        <div className="flex flex-col gap-[10px] bg-[#FFFDF7] w-full px-[20px] py-[14px] text-[12px] font-[600] rounded-[10px]">
          <p>Hint!</p>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/hello.svg" alt="hello" />
            <p>{name}</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/stamp-silhouette.svg" alt="stamp" />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeCharacter;
