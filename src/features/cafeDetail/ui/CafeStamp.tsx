import { useCafeStore } from "@/shared/store/cafeDetailStore";
import StampBook from "@/shared/ui/StampBook";

function CafeStamp() {
  const cafe = useCafeStore(state => state.cafe);
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] pb-[70px]">
      <StampBook cafeName={cafe?.name} />
      <img src="/img/stamp/cafe-cover.svg" alt="cafe cover" />
      <p className="text-[12px] text-[#8E8E93] text-center">
        스탬프북을 저장하면 캐릭터를 확인할 수 있어요!
      </p>
      <button className="bg-[#254434] text-[#FFF] text-[12px] font-[700] h-[41px] w-fit rounded-full px-[20px] hover:bg-green-800">
        내 스탬프북에 저장
      </button>
    </div>
  );
}

export default CafeStamp;
