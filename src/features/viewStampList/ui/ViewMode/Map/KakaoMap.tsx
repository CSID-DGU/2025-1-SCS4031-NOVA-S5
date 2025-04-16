"use client";

import { mockLocationData } from "@/shared/mocks/mockLocationData";
import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";

function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오맵 SDK가 로드되지 않았습니다.");
        return;
      }

      if (!mapRef.current) return;

      const centerLatLng = new window.kakao.maps.LatLng(
        mockLocationData.myLocation.lat,
        mockLocationData.myLocation.lng
      );
      setCenter(centerLatLng);

      const options = {
        center: centerLatLng,
        level: 3,
      };

      const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
      setMap(kakaoMap);

      const bounds = new window.kakao.maps.LatLngBounds();
      mockLocationData.location.forEach(location => {
        bounds.extend(new window.kakao.maps.LatLng(location.lat, location.lng));
      });

      kakaoMap.setBounds(bounds);
    };

    const loadKakaoMapsScript = () => {
      const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
      if (!apiKey) {
        console.error("카카오맵 API 키가 설정되지 않았습니다.");
        return;
      }

      const existingScript = document.getElementById("kakao-map-script");
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(apiKey)}&autoload=false&libraries=services,clusterer`;
      script.async = true;

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(initializeMap);
        }
      };

      document.head.appendChild(script);
    };

    loadKakaoMapsScript();

    return () => {
      if (map) {
        setMap(null);
      }
      const script = document.getElementById("kakao-map-script");
      if (script) {
        script.remove();
      }
    };
  }, []);

  if (error) {
    return (
      <div className="relative w-full h-full">
        <div id="map" className="w-full h-full" style={{ zIndex: 1 }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "70vh",
        borderRadius: "8px",
        position: "fixed",
        bottom: "64px",
        top: "230px",
        left: 0,
        right: 0,
      }}>
      {map &&
        mockLocationData.location.map(location => (
          <MapMarker
            key={location.id}
            map={map}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
          />
        ))}
    </div>
  );
}

export default KakaoMap;
