"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { Overlay } from "./Overlay";
import { Wrapper } from "./Wrapper";

import { Header } from "./Header";
import { Content } from "./Content";
import { useBottomSheetStore } from "@/shared/store/bottomSheetStore";

const Root = ({ children }: { children: ReactNode }) => {
  const { isOpen, open, close } = useBottomSheetStore();
  const [translateY, setTranslateY] = useState(100);
  const startY = useRef(0);
  const deltaY = useRef(0);
  const touching = useRef(false);

  useEffect(() => {
    setTranslateY(isOpen ? 0 : 100);
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touching.current = true;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touching.current) return;
    const currentY = e.touches[0].clientY;
    deltaY.current = currentY - startY.current;

    const screenHeight = window.innerHeight;
    const percent = (deltaY.current / screenHeight) * 100;

    if (!isOpen && deltaY.current < 0) {
      setTranslateY(Math.max(0, 100 + percent));
    }

    if (isOpen && deltaY.current > 0) {
      setTranslateY(Math.min(100, percent));
    }
  };

  const handleTouchEnd = () => {
    touching.current = false;

    if (isOpen && translateY > 30) {
      setTranslateY(100);
      setTimeout(close, 300);
      return;
    }

    if (!isOpen && translateY < 70) {
      setTranslateY(0);
      open();
      return;
    }

    setTranslateY(isOpen ? 0 : 100);
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={close} />
      <Wrapper
        translateY={translateY}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {children}
      </Wrapper>
    </>
  );
};

export const BottomSheet = Object.assign(Root, {
  Header,
  Content,
});
