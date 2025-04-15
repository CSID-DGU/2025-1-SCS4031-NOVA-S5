import { useViewModeStore } from "@/shared/store/viewModeStore";
import TabBar from "./TabBar";
import ListView from "./ViewMode/ListView";
import MapView from "./ViewMode/MapView";

const ViewSwitcher = () => {
  const { viewMode } = useViewModeStore();

  return (
    <div>
      <TabBar />
      <div className="mt-4">{viewMode === "list" ? <ListView /> : <MapView />}</div>
    </div>
  );
};

export default ViewSwitcher;
