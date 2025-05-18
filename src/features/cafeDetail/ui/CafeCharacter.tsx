import { useCafeStore } from "@/shared/store/cafeDetailStore";

function CafeCharacter() {
  const cafe = useCafeStore(state => state.cafe);
  const characterType = cafe?.character?.toLowerCase() || "yellow";

  return (
    <div className="flex flex-col">
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        👀 어떤 캐릭터가 스탬프를 찍어줄까요?
      </p>
      <div className="flex flex-row gap-[10px]">
        <img src={`/img/silhouette/${characterType}.svg`} alt="character" width={90} height={101} />
        <div className="flex flex-col gap-[10px] bg-[#FFFDF7] w-full px-[20px] py-[14px] text-[12px] font-[600] rounded-[10px]">
          <p>Hint!</p>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/hello.svg" alt="hello" />
            <p>{cafe?.name || "예시 카페"}</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src="/img/silhouette/stamp-silhouette.svg" alt="stamp" />
            <p>스탬프를 모아 {cafe?.reward || "리워드"}를 받아보세요!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeCharacter;
