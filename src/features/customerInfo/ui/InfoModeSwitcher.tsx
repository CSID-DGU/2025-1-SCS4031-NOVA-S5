"use client";

import { useInfoModeStore } from "@/shared/store/infoModeStore";
import { CustomerTabBar } from "./CustomerTabBar";
import { StampInfo } from "./StampInfo";
import { ChallengeInfo } from "./ChallengeInfo";
import { UserData } from "../model";

interface InfoModeSwitcherProps {
  customerInfo: UserData;
}

export function InfoModeSwitcher({ customerInfo }: InfoModeSwitcherProps) {
  const { infoMode } = useInfoModeStore();
  return (
    <div>
      <CustomerTabBar />
      <div>
        {infoMode === "stamp" ? (
          <StampInfo userData={customerInfo} />
        ) : (
          <ChallengeInfo userData={customerInfo} />
        )}
      </div>
    </div>
  );
}
