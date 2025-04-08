import FortuneCard from "@/features/fortuneWidget/ui/FortuneCard";
import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import StampSlider from "@/features/main/ui/StampSlider";
import UserCard from "@/features/qrScanner/ui/UserCard";
import Header from "@/shared/ui/Header";


export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-[30px] justify-center items-center gap-[20px]">
        <FortuneCard />
        <UserCard />

      </div>
      <div className="flex flex-col justify-center items-center gap-[40px] mt-[40px]">
        <StampSlider />
        <ChallengeSlider />
      </div>
      
    </div>
  );
}