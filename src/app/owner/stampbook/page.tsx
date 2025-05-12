import StampBookHeader from "@/features/ownerStampBook/ui/StampBookHeader";
import StampBookList from "@/features/ownerStampBook/ui/StampBookList";
import { OwnerGNB } from "@/shared";

export default function OwnerStampBook() {
  return (
    <div className="relative flex flex-col h-screen">
      <StampBookHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] px-[25px] pb-[28px]">
        <StampBookList />
      </div>
      <div className="absolute fixed bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
    </div>
  );
}
