"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import QrSection from "./QrSection"
interface QrModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

function QrModal({ isOpen, setIsOpen }: QrModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 bg-[#FFFDF7] w-[340px] h-[500px] gap-0">
        <DialogHeader className="bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px]">
          <DialogTitle className="text-center !text-title-medium !font-[800] text-[#254434]">
            kimnova님의<br /> 프로필 QR
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center">
         <img src="./img/spring.svg" alt="spring" className="absolute top-[145px]"/>
        </div>
        <div className="flex flex-col  items-center">
          <QrSection />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QrModal;
