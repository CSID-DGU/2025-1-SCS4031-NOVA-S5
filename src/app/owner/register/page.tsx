import StoreRegisterForm from "@/features/storeRegister/ui/StoreRegisterForm";
import StoreRegisterHeader from "@/features/storeRegister/ui/StoreRegisterHeader";

export default function StoreRegister() {
  return (
    <div className="relative flex flex-col min-h-real-screen">
      <StoreRegisterHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-6 px-[25px] pt-[95px]">
        <StoreRegisterForm />
      </div>
    </div>
  );
}
