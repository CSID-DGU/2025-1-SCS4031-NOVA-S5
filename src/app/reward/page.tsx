import GNB from "@/shared/ui/GNB";
import RewardContent from "@/features/reward/ui/RewardContent";
import RewardHeader from "@/features/reward/ui/RewardHeader";

export default function Reward() {
  return (
    <div className="flex flex-col h-screen">
      <RewardHeader />
      <div className="absolute top-[73px] left-6 z-10">
        <img src="/img/one-spring.svg" alt="스프링 왼쪽" className="w-[76px] h-[24px]" />
      </div>
      <div className="absolute top-[73px] right-6 z-10">
        <img src="/img/one-spring.svg" alt="스프링 오른쪽" className="w-[76px] h-[24px]" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <RewardContent />
      </div>
      <GNB />
    </div>
  );
}
