import ChallengeCard from "@/features/challenge/ui/ChallengeCard";
import StampCard from "@/features/stampBook/ui/StampCard";


export default function Home() {
  return (
    <div className="flex gap-2">
      <ChallengeCard />
      <StampCard />
    </div>
  );
}
