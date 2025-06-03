export {}; // 모듈로 인식되도록 설정

declare global {
  interface Window {
    kakao: typeof kakao;
    polylines: kakao.maps.Polyline[];
    daum: {
      Postcode: new (config: {
        oncomplete: (data: { address: string }) => void;
        width: string;
        height: string;
      }) => {
        embed: (element: HTMLElement) => void;
      };
    };
  }

  namespace kakao {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number);
      }

      class LatLngBounds {
        extend(latlng: LatLng): void;
      }

      class Map {
        constructor(container: HTMLElement, options: { center: LatLng; level: number });
        setBounds(bounds: LatLngBounds): void;
        setCenter(latlng: LatLng): void;
      }

      class Marker {
        constructor(options: { position: LatLng; map: Map; title?: string; image?: MarkerImage });
        setMap(map: Map | null): void;
      }

      class Polyline {
        constructor(options: {
          path: LatLng[];
          strokeWeight: number;
          strokeColor: string;
          strokeOpacity: number;
          map: Map;
        });
        setMap(map: Map | null): void;
      }

      class Size {
        constructor(width: number, height: number);
      }

      class Point {
        constructor(x: number, y: number);
      }

      class MarkerImage {
        constructor(
          src: string,
          size: Size,
          options?: {
            spriteSize?: Size;
            spriteOrigin?: Point;
            offset?: Point;
          }
        );
      }

      namespace services {
        class Geocoder {
          addressSearch(address: string, callback: (result: any, status: any) => void): void;
        }

        enum Status {
          OK = "OK",
          ZERO_RESULT = "ZERO_RESULT",
          ERROR = "ERROR",
        }
      }

      namespace event {
        function addListener(target: any, type: string, handler: () => void): void;
        function removeListener(target: any, type: string, handler: () => void): void;
      }

      function load(callback: () => void): void;
    }
  }
}
