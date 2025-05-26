import { useEffect, useState } from "react";

type Location = {
  lat: number | null;
  lng: number | null;
  error: string | null;
};

export const useCurrentLocation = (): Location => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("이 브라우저에서는 위치 정보가 지원되지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      err => {
        setError("위치 정보를 가져오는 데 실패했습니다.");
        console.error(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return { lat, lng, error };
};
