import RewardHeader from "@/features/reward/ui/RewardHeader";
import StampBookList from "@/features/reward/ui/StampBookList";

export default function Reward() {
  return (
    <div className="flex flex-col gap-2">
      <RewardHeader />
      <StampBookList />
    </div>
  );
}
