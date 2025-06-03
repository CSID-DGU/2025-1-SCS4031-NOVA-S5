"use client";

import { useEffect, useRef } from "react";
import { useMapStore } from "@/shared/store/mapStore";
import { BottomSheet } from "@/shared";
import LocationContent from "./LocationContent";

interface LocationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSetLocation: () => void;
}

function LocationSheet({ isOpen, onClose, onSetLocation }: LocationSheetProps) {
  const { setCurrentAddress } = useMapStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    script.onload = () => {
      if (!containerRef.current || !window.daum?.Postcode) return;

      new window.daum.Postcode({
        oncomplete: function (data: any) {
          setCurrentAddress(data.address);
          onSetLocation();
          onClose();
        },
        width: "100%",
        height: "100%",
      }).embed(containerRef.current);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [isOpen, onClose, onSetLocation, setCurrentAddress]);

  if (!isOpen) return null;

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
