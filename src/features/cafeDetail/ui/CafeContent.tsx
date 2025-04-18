import { useCafeStore } from "@/shared/store/cafeDetailStore";
import CafeInfo from "@/shared/ui/CafeInfo";

function CafeContent() {
  const cafe = useCafeStore(state => state.cafe);

  return (
    <div className="m-[18px]">
      <div className="flex flex-row gap-1">
        <img src="/icon/info.svg" alt="info" />
        <p className="text-font-green text-[16px] font-[800]">Cafe Information</p>
      </div>
      <CafeInfo
        name={cafe?.name}
        hours={cafe?.business_hour}
        phone={cafe?.tel}
        address={cafe?.address}
      />
    </div>
  );
}

export default CafeContent;
