import GNB from "@/shared/ui/GNB";
import RewardContent from "@/features/reward/ui/RewardContent";
import RewardHeader from "@/features/reward/ui/RewardHeader";

export default function Reward() {
  return (
    <div className="relative flex flex-col h-screen">
      <RewardHeader />
      <div className="flex-1 overflow-y-auto mb-[84px] scrollbar-hide">
        <RewardContent />
      </div>
      <div className="absolute fixed bottom-0 left-0 right-0">
        <GNB />
      </div>
    </div>
  );
}
