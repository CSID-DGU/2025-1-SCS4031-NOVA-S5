import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedLocation {
  id: string;
  address: string;
  createdAt: number;
}

interface LocationStore {
  savedLocations: SavedLocation[];
  addLocation: (address: string) => void;
  removeLocation: (id: string) => void;
}

export const useLocationStore = create<LocationStore>()(
  persist(
    (set) => ({
      savedLocations: [],
      addLocation: (address: string) =>
        set((state) => ({
          savedLocations: [
            {
              id: Date.now().toString(),
              address,
              createdAt: Date.now(),
            },
            ...state.savedLocations,
          ],
        })),
      removeLocation: (id: string) =>
        set((state) => ({
          savedLocations: state.savedLocations.filter((location) => location.id !== id),
        })),
    }),
    {
      name: "saved-locations",
    }
  )
); 