"use client";

import { useEffect } from "react";

interface MapMarkerProps {
  map: kakao.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
  onClick?: () => void;
}

function MapMarker({ map, position, title, onClick }: MapMarkerProps) {
  useEffect(() => {
    if (!map || !position) return;

    const markerImage = new window.kakao.maps.MarkerImage(
      "/img/markers/marker.svg", // 마커 이미지 경로
      new window.kakao.maps.Size(40, 40), // 마커 이미지 크기
      {
        offset: new window.kakao.maps.Point(20, 40), // 마커 이미지에서 마커의 위치
      }
    );

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
      map: map,
      image: markerImage,
      title: title,
    });

    if (onClick) {
      window.kakao.maps.event.addListener(marker, "click", onClick);
    }

    return () => {
      marker.setMap(null);
    };
  }, [map, position, title, onClick]);

  return null;
}

export default MapMarker;
