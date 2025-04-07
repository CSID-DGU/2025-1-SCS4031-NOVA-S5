import FortuneCard from "@/features/fortuneWidget/ui/FortuneCard";
import UserCard from "@/features/qrScanner/ui/UserCard";
import Header from "@/shared/ui/Header";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <FortuneCard />
        <UserCard />
      </div>      
    </div>

  );
}
