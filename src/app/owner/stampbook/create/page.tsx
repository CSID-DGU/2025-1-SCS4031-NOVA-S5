import CreateContent from "@/features/ownerStampBook/create/ui/CreateContent";
import CreateHeader from "@/features/ownerStampBook/create/ui/CreateHeader";

export default function StampBookCreate() {
  return (
    <div className="relative flex flex-col h-screen">
      <CreateHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] px-[25px] pb-[28px]">
        <CreateContent />
      </div>
      <div className="absolute bottom-0 left-0 right-0"></div>
    </div>
  );
}
