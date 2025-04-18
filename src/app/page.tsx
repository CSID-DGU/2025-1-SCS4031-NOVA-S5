import ChallengeSlider from "@/features/main/ui/ChallengeSlider";
import EmptyState from "@/features/main/ui/EmptyState";
import StampSlider from "@/features/main/ui/StampSlider";
import StampBook from "@/shared/ui/StampBook";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <StampSlider />
      <ChallengeSlider />
      <EmptyState type="stampBook" />
      <StampBook />
    </div>
  );
}
