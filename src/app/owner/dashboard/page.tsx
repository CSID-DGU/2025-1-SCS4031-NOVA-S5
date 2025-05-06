import { AddCafeCard, AddStampbook, DashBoardHeader, QrCard } from "@/features/owner/ui";

export default function DashBoard() {
  return (
    <div className="p-5">
      <DashBoardHeader title="스탬프 적립" />
      <div className="mt-8">
        {/* <AddCafeCard status="none" /> */}
        {/* <AddStampbook /> */}
        <QrCard />
      </div>
    </div>
  );
}
