import InfoForm from "@/features/ownerStampBook/info/ui/InfoForm";
import InfoHeader from "@/features/ownerStampBook/info/ui/InfoHeader";

export default function StampBookInfo() {
  return (
    <div className="relative flex flex-col min-h-real-screen">
      <InfoHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] pt-[70px] px-[25px] pb-[28px]">
        <InfoForm />
      </div>
    </div>
  );
}
