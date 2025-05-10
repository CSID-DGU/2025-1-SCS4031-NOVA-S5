"use client";

import { BottomSheet } from "@/shared";
import LocationContent from "./LocationContent";

function LocationSheet() {
  return (
    <BottomSheet>
      <BottomSheet.Header></BottomSheet.Header>
      <BottomSheet.Content>
        <LocationContent />
      </BottomSheet.Content>
    </BottomSheet>
  );
}

export default LocationSheet;
