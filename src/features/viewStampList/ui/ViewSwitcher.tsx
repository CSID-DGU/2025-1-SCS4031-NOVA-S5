import { useViewModeStore } from "@/shared/store/viewModeStore";
import TabBar from "./TabBar";
import ListView from "./ViewMode/ListView";
import MapView from "./ViewMode/MapView";
import { useCafes } from "../hooks/useCafes";

const ViewSwitcher = () => {
  const { viewMode } = useViewModeStore();

  const { data, isLoading, isError } = useCafes({ approved: true });

  if (isLoading) return <div className="p-4">카페 정보를 불러오는 중입니다...</div>;
  if (isError) return <div className="p-4">카페 정보를 불러오지 못했습니다.</div>;
  if (!data) return null;

  return (
    <div className="pb-[80px]">
      <TabBar />
      <div className="mt-4">{viewMode === "list" ? <ListView /> : <MapView />}</div>
    </div>
  );
};

export default ViewSwitcher;
