import { CustomerCard, CustomerHeader, InfoModeSwitcher } from "@/features/customerInfo/ui";

export default function CustomerPage() {
  return (
    <div className="flex flex-col gap-6 p-7">
      <CustomerHeader />
      <CustomerCard name="나무심는김노바" />
      <InfoModeSwitcher />
    </div>
  );
}
