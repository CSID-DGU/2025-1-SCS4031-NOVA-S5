import ExampleContent from "@/features/ownerStampBook/example/ui/ExampleContent";
import ExampleHeader from "@/features/ownerStampBook/example/ui/ExampleHeader";

export default function StampBookExample() {
  return (
    <div className="relative flex flex-col h-screen">
      <ExampleHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] pb-[28px]">
        <ExampleContent />
      </div>
      <div className="absolute bottom-0 left-0 right-0"></div>
    </div>
  );
}
