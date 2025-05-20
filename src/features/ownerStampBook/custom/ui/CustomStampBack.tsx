"use client";

import { useCustomStore } from "@/shared/store/customStore";
import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";

export default function CustomStampBack() {
  const { backBackground, backImage } = useCustomStore();

  const [stageSize, setStageSize] = useState({ width: 400, height: 154 });
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backImage) {
      const img = new window.Image();
      img.src = URL.createObjectURL(backImage);
      img.onload = () => setBgImage(img);
    } else {
      setBgImage(null);
    }
  }, [backImage]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setStageSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-[50px] h-[33px] py-1 bg-green-300 rounded-[10px] text-md font-bold text-font-green text-center">
        뒷면
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-[154px] rounded-[10px] shadow-md overflow-hidden"
        style={{ backgroundColor: backBackground }}>
        <Stage
          width={stageSize.width}
          height={stageSize.height}
          className="absolute inset-0 z-20 pointer-events-none">
          <Layer>
            <Rect width={stageSize.width} height={stageSize.height} fill={backBackground} />
            {bgImage && (
              <KonvaImage
                image={bgImage}
                width={stageSize.width}
                height={stageSize.height}
                listening={false}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
