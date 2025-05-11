"use client";
import { QrScanHeader } from "@/features/owner/ui";
import { QrScanner } from "@/features/owner/ui/QRScanner";
import { OwnerGNB } from "@/shared";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQRStore } from "@/shared/store";

export default function QrScanPage() {
  const [isScanning, setIsScanning] = useState(false);
  // const [scanResult, setScanResult] = useState<string | null>(null);
  const router = useRouter();
  const { setScannedUuid } = useQRStore();

  // 컴포넌트 마운트 시 스캔 시작
  useEffect(() => {
    setIsScanning(true);

    // 페이지 언마운트 시 카메라 정리
    return () => {
      setIsScanning(false);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsScanning(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  const handleScan = (result: string) => {
    if (isScanning) {
      setScannedUuid(result);
      setIsScanning(false);
      router.push("/customer");
    }
  };

  const handleExit = () => {
    setIsScanning(false);
    // 뒤로가기 실행
    setTimeout(() => {
      router.push("/owner/main");
    }, 100);
  };

  const handleError = (error: unknown) => {
    console.error("QR 스캔 중 오류가 발생했습니다:", error);
  };

  return (
    <div className="flex flex-col">
      <div className="px-5">
        <QrScanHeader title="프로필 QR 스캔" onExit={handleExit} />
      </div>
      <div className="flex-1">
        <QrScanner onScan={handleScan} onError={handleError} isScanning={isScanning} />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <OwnerGNB />
      </div>
    </div>
  );
}
