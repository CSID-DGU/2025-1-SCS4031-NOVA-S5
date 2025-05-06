"use client";

import { useInfoModeStore } from "@/shared/store/infoModeStore";
import { CustomerTabBar } from "./CustomerTabBar";
import { StampInfo } from "./StampInfo";

export function InfoModeSwitcher() {
  const { infoMode } = useInfoModeStore();
  return (
    <div>
      <CustomerTabBar />
      <div>{infoMode === "stamp" ? <StampInfo /> : <></>}</div>
    </div>
  );
}
