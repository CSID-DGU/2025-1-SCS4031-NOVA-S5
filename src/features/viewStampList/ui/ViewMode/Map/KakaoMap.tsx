"use client";

import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import InfoCard from "@/shared/ui/InfoCard";
import { useCafeStore } from "@/shared/store/cafeStore";

function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { cafes } = useCafeStore();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [mapHeight, setMapHeight] = useState("65vh");
  const markersRef = useRef<kakao.maps.Marker[]>([]);

  // 유효한 좌표를 가진 카페만 필터링
  const validCafes = cafes.filter(
    cafe =>
      typeof cafe.latitude === "number" &&
      typeof cafe.longitude === "number" &&
      cafe.latitude >= -90 &&
      cafe.latitude <= 90 &&
      cafe.longitude >= -180 &&
      cafe.longitude <= 180
  );

  useEffect(() => {
    const calculateMapHeight = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight >= 800) {
        setMapHeight("70vh");
      } else if (screenHeight >= 600) {
        setMapHeight("60vh");
      } else {
        setMapHeight("50vh");
      }
    };

    calculateMapHeight();
    window.addEventListener("resize", calculateMapHeight);

    return () => {
      window.removeEventListener("resize", calculateMapHeight);
    };
  }, []);

  // 지도 초기화
  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오맵 SDK가 로드되지 않았습니다.");
        return;
      }

      if (!mapRef.current) return;

      // 기본 중심점 설정 (서울시청)
      const defaultCenter = new window.kakao.maps.LatLng(37.5665, 126.978);
      setCenter(defaultCenter);

      const options = {
        center: defaultCenter,
        level: 3,
      };

      const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
      setMap(kakaoMap);
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
  }, []); // 지도 초기화는 한 번만 실행

  // 마커 생성 및 업데이트
  useEffect(() => {
    if (!map || !validCafes.length) return;

    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // 새로운 마커 생성
    const bounds = new window.kakao.maps.LatLngBounds();
    validCafes.forEach(cafe => {
      const position = new window.kakao.maps.LatLng(cafe.latitude, cafe.longitude);
      bounds.extend(position);
    });

    // 지도 영역 설정
    map.setBounds(bounds);
  }, [map, validCafes]);

  const activeCafe = validCafes.find(cafe => cafe.cafeId === activeMarkerId);

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
      className="z-0"
      style={{
        width: "100%",
        height: mapHeight,
        borderRadius: "8px",
        position: "relative",
        bottom: "64px",
        top: 0,
        left: 0,
        right: 0,
      }}>
      {map &&
        validCafes.map(cafe => (
          <MapMarker
            key={cafe.cafeId}
            map={map}
            position={{ lat: cafe.latitude, lng: cafe.longitude }}
            title={cafe.cafeName}
            isActive={activeMarkerId === cafe.cafeId}
            onClick={() => setActiveMarkerId(prev => (prev === cafe.cafeId ? null : cafe.cafeId))}
          />
        ))}

      {activeCafe && (
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-md">
          <InfoCard
            id={activeCafe.cafeId}
            name={activeCafe.cafeName}
            cafe_status="운영중"
            business_hour="매일 10:00 - 20:00"
            img_url={activeCafe.cafeImage || ""}
          />
        </div>
      )}
    </div>
  );
}

export default KakaoMap;
