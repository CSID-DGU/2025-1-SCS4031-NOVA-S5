import GNB from "@/shared/ui/GNB";
import RewardContent from "@/features/reward/ui/RewardContent";
import RewardHeader from "@/features/reward/ui/RewardHeader";

export default function Reward() {
  return (
    <div className="relative flex flex-col min-h-real-screen">
      <RewardHeader />
      <div className="flex-1 overflow-y-auto mt-[70px] mb-[84px] scrollbar-hide">
        <RewardContent />
      </div>
      <GNB />
    </div>
  );
}
