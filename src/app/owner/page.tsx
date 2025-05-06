import { AddCafeCard, AddStampbook, DashBoardHeader, QrCard } from "@/features/owner/ui";
import { OwnerGNB } from "@/shared";

export default function OwnerPage() {
  return (
    <div className="p-5">
      <DashBoardHeader title="스탬프 적립" />
      <div className="mt-8">
        {/* <AddCafeCard status="none" /> */}
        {/* <AddStampbook /> */}
        <QrCard />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
    </div>
  );
}
