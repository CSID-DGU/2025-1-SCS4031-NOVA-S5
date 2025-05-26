import InfoForm from "@/features/ownerStampBook/info/ui/InfoForm";
import InfoHeader from "@/features/ownerStampBook/info/ui/InfoHeader";

export default function StampBookInfo() {
  return (
    <div className="relative flex flex-col h-screen">
      <InfoHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] px-[25px] pb-[28px]">
        <InfoForm />
      </div>
    </div>
  );
}
