"use client";

import { Button } from "@/components/ui/button";
import TemplateStampBook from "./TemplateStampBook";
import { useEffect, useState } from "react";
import InputModal from "@/shared/ui/modal/InputModal";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";

export default function StampFront() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCafe } = useSelectedCafe();
  const [frontName, setFrontName] = useState(selectedCafe?.cafeName || "");

  const handleNameChange = (name: string) => {
    setFrontName(name);
  };

  useEffect(() => {
    if (selectedCafe?.cafeName && !frontName) {
      setFrontName(selectedCafe.cafeName);
    }
  }, [selectedCafe, frontName, setFrontName]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-md text-font-green font-bold">앞면</p>
        <div className="flex items-center justify-center">
          <TemplateStampBook frontName={frontName} />
        </div>
        <Button
          className="w-[109px] rounded-full bg-green-300 text-font-green text-sm font-semibold mx-auto"
          onClick={() => setIsOpen(true)}>
          매장명 바꾸기
        </Button>
      </div>
      <InputModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target="front"
        onNameChange={handleNameChange}
      />
    </>
  );
}
