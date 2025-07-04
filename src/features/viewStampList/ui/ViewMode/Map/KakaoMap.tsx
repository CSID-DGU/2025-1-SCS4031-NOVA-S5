"use client";

import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import InfoCard from "@/shared/ui/InfoCard";
import { useCafeStore } from "@/shared/store/cafeStore";
import { useMapStore } from "@/shared/store/mapStore";
import { getTodayBusinessHour } from "@/shared";

function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { cafes } = useCafeStore();
  const { currentAddress } = useMapStore();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [mapHeight, setMapHeight] = useState("65vh");

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

      // 기본 중심점 설정 (충무로역)
      const defaultCenter = new window.kakao.maps.LatLng(37.5612, 126.9947);
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
  }, []);

  // 주소가 변경될 때마다 지도 중심 업데이트
  useEffect(() => {
    if (currentAddress && map) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(currentAddress, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const newCenter = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(newCenter);
          setCenter(newCenter);
        }
      });
    }
  }, [currentAddress, map]);

  const handleMarkerClick = (cafeId: number) => {
    setActiveMarkerId(prev => (prev === cafeId ? null : cafeId));
  };

  const activeCafe = validCafes.find(cafe => cafe.cafeId === activeMarkerId);

  const { status, time } = activeCafe
    ? getTodayBusinessHour(activeCafe.openHours)
    : { status: "정보 없음", time: "" };

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
            onClick={() => handleMarkerClick(cafe.cafeId)}
          />
        ))}

      {activeCafe && (
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-md">
          <InfoCard
            id={activeCafe.cafeId}
            name={activeCafe.cafeName}
            cafe_status={status}
            business_hour={time}
            img_url={
              activeCafe.cafeImage ||
              "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixcafeId=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
        </div>
      )}
    </div>
  );
}

export default KakaoMap;
