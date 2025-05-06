"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

declare module "@zxing/browser" {
  interface BrowserQRCodeReader {
    stopAsyncDecode(): void;
  }
}

interface QrScannerProps {
  onScan: (result: string) => void;
  onError?: (error: unknown) => void;
  isScanning: boolean;
}

export function QrScanner({ onScan, onError, isScanning }: QrScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserQRCodeReader | null>(null);
  const [hasPermission, setHasPermission] = useState(true);
  const hasScanned = useRef(false);
  const streamRef = useRef<MediaStream | null>(null);

  const stopScanner = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        track.enabled = false;
      });
      streamRef.current = null;
    }

    if (videoRef.current) {
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => {
          track.stop();
          track.enabled = false;
        });
      }
      videoRef.current.srcObject = null;
      videoRef.current.pause();
    }

    if (codeReader.current) {
      codeReader.current = null;
    }
  };

  useEffect(() => {
    if (isScanning) {
      hasScanned.current = false;
    } else {
      stopScanner();
    }
  }, [isScanning]);

  useEffect(() => {
    if (!isScanning || hasScanned.current) {
      stopScanner();
      return;
    }

    codeReader.current = new BrowserQRCodeReader();

    const startScanner = async () => {
      try {
        const devices = await BrowserQRCodeReader.listVideoInputDevices();
        if (devices.length === 0) throw new Error("No camera found");

        const selectedDeviceId = devices[0].deviceId;

        await codeReader.current?.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current!,
          (result, err) => {
            if (result && !hasScanned.current) {
              hasScanned.current = true;
              stopScanner();
              onScan(result.getText());
            }
            if (err && !(err.name === "NotFoundException")) {
              onError?.(err);
            }
          }
        );

        if (videoRef.current?.srcObject) {
          streamRef.current = videoRef.current.srcObject as MediaStream;
        }
      } catch (e) {
        setHasPermission(false);
        onError?.(e);
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, [onScan, onError, isScanning]);

  if (!hasPermission) {
    return <p>카메라 권한이 필요합니다. 브라우저 설정을 확인해주세요.</p>;
  }

  if (!isScanning) {
    return <p>QR 코드 스캔이 완료되었습니다.</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto rounded overflow-hidden shadow">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ width: "100%", height: "calc(100vh - 137px)" }}
      />
    </div>
  );
}
