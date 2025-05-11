"use client";

import { Button } from "@/components/ui/button";
import OwnerStampBook from "../../ui/OwnerStampBook";
import { useState } from "react";
import InputModal from "@/shared/ui/modal/InputModal";

export default function StampFront() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-md text-font-green font-bold">앞면</p>
        <div className="flex items-center justify-center">
          <OwnerStampBook />
        </div>
        <Button
          className="w-[109px] rounded-full bg-green-300 text-font-green text-sm font-semibold mx-auto"
          onClick={() => setIsOpen(true)}>
          매장명 바꾸기
        </Button>
      </div>
      <InputModal isOpen={isOpen} setIsOpen={setIsOpen} target="front" />
    </>
  );
}
