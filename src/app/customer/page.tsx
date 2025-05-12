"use client";

import { getCustomerInfo } from "@/features/customerInfo/service";
import { CustomerCard, CustomerHeader, InfoModeSwitcher } from "@/features/customerInfo/ui";
import { useQRStore } from "@/shared/store";
import { useQuery } from "@tanstack/react-query";

export default function CustomerPage() {
  const { scannedUuid } = useQRStore();
  const {
    data: customerInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["customerStatus", scannedUuid],
    queryFn: () => getCustomerInfo(scannedUuid!),
    enabled: !!scannedUuid,
  });
  if (isLoading) {
    return <p>고객 정보를 불러오는 중입니다...</p>;
  }

  if (isError || !customerInfo) {
    return <p>고객 정보를 불러오는 데 실패했습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-7">
      <CustomerHeader />
      <CustomerCard name={customerInfo.name} imageUrl={customerInfo.profilePictureUrl} />
      <InfoModeSwitcher customerInfo={customerInfo} />
    </div>
  );
}
