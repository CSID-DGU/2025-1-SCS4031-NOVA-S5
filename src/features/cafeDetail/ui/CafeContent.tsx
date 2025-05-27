import { useCafeStore } from "@/shared/store/cafeDetailStore";
import CafeInfo from "@/shared/ui/CafeInfo";
import RewardCard from "./RewardCard";
import CafeCharacter from "./CafeCharacter";
import dynamic from "next/dynamic";

const CafeStamp = dynamic(() => import("@/features/cafeDetail/ui/CafeStamp"), {
  ssr: false,
});

function CafeContent() {
  const cafe = useCafeStore(state => state.cafe);

  return (
    <div className="m-[18px]">
      <div className="flex flex-row gap-1 mb-5">
        <img src="/icon/info.svg" alt="info" />
        <p className="text-font-green text-[16px] font-[800]">Cafe Information</p>
      </div>
      <div className="flex flex-col gap-[30px]">
        <CafeInfo
          name={cafe?.name}
          hours={cafe?.business_hour}
          phone={cafe?.tel}
          address={cafe?.address}
        />
        <RewardCard />
        <CafeCharacter />
        <CafeStamp />
      </div>
    </div>
  );
}

export default CafeContent;
