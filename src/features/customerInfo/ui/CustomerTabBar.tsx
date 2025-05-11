import { useInfoModeStore } from "@/shared/store/infoModeStore";
import clsx from "clsx";

export const CustomerTabBar = () => {
  const { infoMode, setInfoMode } = useInfoModeStore();

  return (
    <div className="flex justify-center ">
      {["stamp", "challenge"].map(mode => (
        <button
          key={mode}
          onClick={() => setInfoMode(mode as "stamp" | "challenge")}
          className={clsx(
            "px-4 py-2 text-sm font-medium w-full",
            infoMode === mode
              ? "border-b-4 border-tabbar text-font-green"
              : "text-disabledfont border-b-4 border-[#E2ECDC]"
          )}>
          {mode === "stamp" ? "스탬프북" : "챌린지"}
        </button>
      ))}
    </div>
  );
};
