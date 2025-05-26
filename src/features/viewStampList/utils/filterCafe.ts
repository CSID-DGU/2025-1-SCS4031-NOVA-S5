import { CafeResponse } from "../model";
import { getDistanceInKm } from "./getDistanceInKm";

export const filterCafe = (
  cafes: CafeResponse[],
  currentLat: number,
  currentLng: number
): CafeResponse[] => {
  return cafes.filter(cafe => {
    const distance = getDistanceInKm(currentLat, currentLng, cafe.latitude, cafe.longitude);
    return distance <= 1; // 1km 이내
  });
};
