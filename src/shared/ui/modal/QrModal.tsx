"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QrSection from "./QrSection";
import { useQuery } from "@tanstack/react-query";
import { fetchQrValue } from "@/shared/api";
interface QrModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function QrModal({ isOpen, setIsOpen }: QrModalProps) {
  const { data: qrValue } = useQuery({
    queryKey: ["qrValue"],
    queryFn: fetchQrValue,
    enabled: isOpen, // 모달이 열릴 떄만 요청한다.
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 bg-[#FFFDF7] w-[340px] h-[500px] gap-0">
        <DialogHeader className="bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px]">
          <DialogTitle className="text-center !text-title-medium !font-[800] text-[#254434]">
            kimnova님의
            <br /> 프로필 QR
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <img src="/img/spring.svg" alt="spring" className="absolute top-[147px]" />
        </div>
        <div className="flex flex-col  items-center">
          <QrSection uuid={qrValue} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QrModal;
