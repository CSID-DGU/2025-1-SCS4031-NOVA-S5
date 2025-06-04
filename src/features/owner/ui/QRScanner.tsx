"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

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
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // 모바일 - 'ideal'로 완화
          try {
            const constraints = {
              video: { facingMode: { ideal: "environment" } },
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              streamRef.current = stream;
            }

            await codeReader.current?.decodeFromVideoElement(videoRef.current!, (result, err) => {
              if (result && !hasScanned.current) {
                hasScanned.current = true;
                stopScanner();
                onScan(result.getText());
              }
              if (err && err.name !== "NotFoundException") {
                onError?.(err);
              }
            });
            return;
          } catch (mobileErr) {
            console.warn("📱 모바일 스캔 실패, fallback으로 데스크탑 방식 사용", mobileErr);
            // fallback: 데스크탑 방식으로 처리
          }
        }

        await navigator.mediaDevices.getUserMedia({ video: true }); // label 노출 위한 초기화
        const devices = await BrowserQRCodeReader.listVideoInputDevices();

        if (devices.length === 0) {
          throw new Error("No camera devices found.");
        }

        const preferredDevice = devices.find(device => device.label.toLowerCase().includes("back"));

        const selectedDeviceId = preferredDevice?.deviceId ?? devices[0].deviceId;

        await codeReader.current?.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current!,
          (result, err) => {
            if (result && !hasScanned.current) {
              hasScanned.current = true;
              stopScanner();
              onScan(result.getText());
            }
            if (err && err.name !== "NotFoundException") {
              onError?.(err);
            }
          }
        );
      } catch (e) {
        console.error("카메라 접근 또는 QR 스캔 오류:", e);
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
    return <p>카메라에 접근할 수 없습니다. 브라우저 권한을 확인해주세요.</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto rounded overflow-hidden shadow relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ width: "100%", height: "calc(100vh - 137px)" }}
        autoPlay
        playsInline
        muted
      />
      <p className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-body-small font-semibold">
        화면 내 범위에 맞춰
        <br />
        프로필 QR을 스캔해주세요
      </p>
      <img
        src="/img/qr/qr-info.svg"
        alt="QR 코드 스캔 가이드"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-147 h-147 pointer-events-none"
      />
    </div>
  );
}
