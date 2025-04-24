import { getSilhouetteImage, getSilhouetteInfo } from "@/shared";
import { SilhouetteColor } from "@/shared/model";
import { useCafeStore } from "@/shared/store/cafeDetailStore";

function CafeCharacter() {
  const cafe = useCafeStore(state => state.cafe);
  const imagePath = getSilhouetteImage(cafe?.character as SilhouetteColor);
  const [name, desc] = getSilhouetteInfo(cafe?.character as SilhouetteColor);

  return (
    <div className="flex flex-col">
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        👀 어떤 캐릭터가 스탬프를 찍어줄까요?
      </p>
      <div className="flex flex-row gap-[10px]">
        <img src={imagePath} alt="character silhouette" />
        <div className="flex flex-col gap-[10px] bg-[#FFFDF7] w-full px-[20px] py-[14px] text-[12px] font-[600] rounded-[10px]">
          <p>Hint!</p>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/hello.svg" alt="hello" />
            <p>{name}</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/stamp-silhouette.svg" alt="stamp silhouette" />
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeCharacter;
