import CustomHeader from "@/features/ownerStampBook/custom/ui/CustomHeader";
import CustomNav from "@/features/ownerStampBook/custom/ui/CustomMenu";
import CustomContent from "@/features/ownerStampBook/custom/ui/CustomContent";

export default function CustomStampBook() {
  return (
    <div className="relative flex flex-col h-screen bg-green-400">
      <CustomHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] px-[25px] pb-[28px]">
        <CustomContent />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <CustomNav />
      </div>
    </div>
  );
}
