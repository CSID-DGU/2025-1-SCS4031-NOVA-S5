import { useViewModeStore } from "@/shared/store/viewModeStore";
import clsx from "clsx";

const TabBar = () => {
  const { viewMode, setViewMode } = useViewModeStore();

  return (
    <div className="flex justify-center mx-[28px]">
      {["list", "map"].map(mode => (
        <button
          key={mode}
          onClick={() => setViewMode(mode as "list" | "map")}
          className={clsx(
            "px-4 py-2 text-sm font-medium w-full",
            viewMode === mode
              ? "border-b-4 border-tabbar text-font-green"
              : "text-disabledfont border-b-4 border-[#E2ECDC]"
          )}>
          {mode === "list" ? "리스트로 보기" : "지도로 보기"}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
