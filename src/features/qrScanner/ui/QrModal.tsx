"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import InfoMesssages from "./InfoMessages"

interface QrModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

function QrModal({ isOpen, setIsOpen }: QrModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 bg-[#FBFBEE] w-[340px] h-[500px] gap-0">
        <DialogHeader className="bg-[#FFF] flex justify-center items-center rounded-[10px]">
          <DialogTitle className="text-center text-title-medium font-[800]">
            kimnova님의<br /> 프로필 QR
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center">
         <img src="./img/spring.svg" alt="spring" className="absolute top-[155px]"/>
         <InfoMesssages />    
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          {/*qr 위치*/}
          <Button 
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="w-[70px] h-[30px] bg-[#B5CDB7] hover:bg-[#a7c7a1] text-[#FFF] !text-body-small border-0"
          >
            확인
          </Button>    
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QrModal;
