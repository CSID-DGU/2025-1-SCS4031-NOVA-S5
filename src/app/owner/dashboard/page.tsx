import { AddCafeCard, DashBoardHeader } from "@/features/owner/ui";

export default function DashBoard() {
  return (
    <div className="p-5">
      <DashBoardHeader title="스탬프 적립" />
      <div className="mt-8">
        <AddCafeCard status="none" />
      </div>
    </div>
  );
}
