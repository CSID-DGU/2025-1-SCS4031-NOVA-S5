import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import EmptyState from "@/features/main/ui/EmptyState";
import FortuneCard from "@/features/main/ui/FortuneCard";
import StampSlider from "@/features/main/ui/StampSlider";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <StampSlider />
      <ChallengeSlider />
      <FortuneCard />
      <EmptyState type="stampBook" />
    </div>
  );
}
