"use client";

import SearchHeader from "@/features/viewStampList/ui/SearchHeader";
import ViewSwitcher from "@/features/viewStampList/ui/ViewSwitcher";
import GNB from "@/shared/ui/GNB";

export default function StampListPage() {
  return (
    <div className="flex flex-col relative h-screen">
      <SearchHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-[20px]">
        <ViewSwitcher />
      </div>
      <GNB />
    </div>
  );
}
