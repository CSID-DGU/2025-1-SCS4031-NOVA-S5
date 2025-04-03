import { Button } from "@/components/ui/button";
import UserCard from "@/features/qrScanner/ui/UserCard";

export default function Home() {
  return (
    <div className="flex gap-2">
      <UserCard />
    </div>
  );
}
