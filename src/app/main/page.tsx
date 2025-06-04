import FortuneCard from "@/features/fortuneWidget/ui/FortuneCard";
import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import StampSlider from "@/features/main/ui/StampSlider";
import UserCard from "@/features/qrScanner/ui/UserCard";
import GNB from "@/shared/ui/GNB";
import Header from "@/shared/ui/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-real-screen">
      <Header />
      <div className="flex-1 overflow-y-auto pb-[20px] pt-[50px] scrollbar-hide">
        <div className="flex flex-col mt-[20px] justify-center items-center gap-[20px]">
          <FortuneCard />
          <UserCard />
        </div>
        <div className="flex flex-col justify-center items-center gap-[40px] mt-[40px] mb-[100px]">
          <StampSlider />
          <ChallengeSlider />
        </div>
      </div>
      <GNB />
    </div>
  );
}
