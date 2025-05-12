import TemplateContent from "@/features/ownerStampBook/template/ui/TemplateContent";
import TemplateFooter from "@/features/ownerStampBook/template/ui/TemplateFooter";
import TemplateHeader from "@/features/ownerStampBook/template/ui/TemplateHeader";

export default function Template() {
  return (
    <div className="relative flex flex-col h-screen">
      <TemplateHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[35px] px-[25px] pb-[28px]">
        <TemplateContent />
        <TemplateFooter />
      </div>
    </div>
  );
}
