import FortuneCard from "@/features/fortuneWidget/ui/FortuneCard";
import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import StampSlider from "@/features/main/ui/StampSlider";
import UserCard from "@/features/qrScanner/ui/UserCard";
import GNB from "@/shared/ui/GNB";
import Header from "@/shared/ui/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* 스크롤 가능한 영역 */}
      <div className="flex-1 overflow-y-auto pb-[20px]">
        <div className="flex flex-col mt-[20px] justify-center items-center gap-[20px]">
          <FortuneCard />
          <UserCard />
        </div>
        <div className="flex flex-col justify-center items-center gap-[40px] mt-[40px]">
          <StampSlider />
          <ChallengeSlider />
        </div>
      </div>
      {/* 항상 하단에 고정될 GNB */}
      <GNB />
    </div>
  );
}
