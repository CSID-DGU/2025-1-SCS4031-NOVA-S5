"use client";

import { mockLocationData } from "@/shared/mocks/mockLocationData";
import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import InfoCard from "./InfoCard";

function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [mapHeight, setMapHeight] = useState("65vh");

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

  const activeLocation = mockLocationData.location.find(loc => loc.id === activeMarkerId);

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
        mockLocationData.location.map(location => (
          <MapMarker
            key={location.id}
            map={map}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
            isActive={activeMarkerId === location.id}
            onClick={() => setActiveMarkerId(prev => (prev === location.id ? null : location.id))}
          />
        ))}

      {activeLocation && (
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-md">
          <InfoCard
            id={activeLocation.id}
            name={activeLocation.name}
            cafe_status={activeLocation.cafe_status}
            business_hour={activeLocation.business_hour}
            img_url={activeLocation.img_url}
          />
        </div>
      )}
    </div>
  );
}

export default KakaoMap;
