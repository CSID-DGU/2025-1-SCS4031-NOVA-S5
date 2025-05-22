import { useViewModeStore } from "@/shared/store/viewModeStore";
import TabBar from "./TabBar";
import ListView from "./ViewMode/ListView";
import MapView from "./ViewMode/MapView";
import { useCafes } from "../hooks/useCafes";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
// import { filterCafe } from "../utils";
import { useCafeStore } from "@/shared/store/cafeStore";
// import { useEffect } from "react";

const ViewSwitcher = () => {
  const { viewMode } = useViewModeStore();
  const { lat, lng } = useCurrentLocation();
  const { data, isLoading, isError } = useCafes({ approved: true });
  const setCafes = useCafeStore((state) => state.setCafes);
  
  if (data) {
    setCafes(data);
  }

  // useEffect(() => {
  //   if (data && lat !== null && lng !== null) {
  //     const filtered = filterCafe(data, lat, lng);
  //     setCafes(filtered);
  //   }
  // }, [data, lat, lng, setCafes]);

  if (isLoading) return <div className="p-4">카페 정보를 불러오는 중입니다...</div>;
  if (isError) return <div className="p-4">카페 정보를 불러오지 못했습니다.</div>;
  if (!data) return null;
  if (lat === null || lng === null)
    return <div className="p-4">위치 정보를 불러오는 중입니다...</div>;

  return (
    <div className="pb-[80px]">
      <TabBar />
      <div className="mt-4">{viewMode === "list" ? <ListView /> : <MapView />}</div>
    </div>
  );
};

export default ViewSwitcher;
