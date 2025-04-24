import { useCafeStore } from "@/shared/store/cafeDetailStore";

function RewardCard() {
  const cafe = useCafeStore(state => state.cafe);
  return (
    <div>
      <p className="text-[16px] font-[800] text-font-green mb-[20px]">
        ☕ 스탬프 다 모으면 {cafe?.reward}!
      </p>
      <div className="flex flex-row gap-2 items-center bg-[#FFFDF7] w-full h-[62px] rounded-[10px] p-[11px]">
        <img src="/img/cafe-logo.svg" alt="cafe logo" className="w-[39px] h-[39px]" />
        <div>
          <p className="text-[12px] font-[700] text-font-green">{cafe?.cafe_detail}</p>
          <p className="text-[10px] font-[600] text-tabbar">{cafe?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default RewardCard;
