"use client";

import { BottomSheet } from "@/shared";
import LocationContent from "./LocationContent";

interface LocationSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

function LocationSheet({ isOpen, onClose }: LocationSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <BottomSheet.Header></BottomSheet.Header>
      <BottomSheet.Content>
        <LocationContent />
      </BottomSheet.Content>
    </BottomSheet>
  );
}

export default LocationSheet;
