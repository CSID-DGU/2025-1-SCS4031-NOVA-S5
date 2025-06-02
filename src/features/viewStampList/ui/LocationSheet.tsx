"use client";

import { BottomSheet } from "@/shared";
import LocationContent from "./LocationContent";

interface LocationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSetLocation: () => void;
}

function LocationSheet({ isOpen, onClose, onSetLocation }: LocationSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <BottomSheet.Header></BottomSheet.Header>
      <BottomSheet.Content>
        <LocationContent onClose={onClose} onSetLocation={onSetLocation} />
      </BottomSheet.Content>
    </BottomSheet>
  );
}

export default LocationSheet;
