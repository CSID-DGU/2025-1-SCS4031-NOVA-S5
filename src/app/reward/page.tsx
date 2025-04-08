import RewardContent from "@/features/reward/ui/RewardContent";
import RewardHeader from "@/features/reward/ui/RewardHeader";

export default function Reward() {
  return (
    <div className="flex flex-col">
      <RewardHeader />
      <RewardContent />
    </div>
  );
}
