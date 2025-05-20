"use client";

import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCustomStore } from "@/shared/store/customStore";
import { Stage as KonvaStage } from "konva/lib/Stage";

export default function CustomStampFront() {
  const { frontBackground, frontImage } = useCustomStore();
  const stageRef = useRef<KonvaStage>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [stageSize, setStageSize] = useState({ width: 400, height: 154 });
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (frontImage) {
      const img = new window.Image();
      img.src = URL.createObjectURL(frontImage);
      img.onload = () => setBgImage(img);
    } else {
      setBgImage(null);
    }
  }, [frontImage]);

  useEffect(() => {
    const loadImages = async () => {
      const imageObjects = await Promise.all(
        Array.from({ length: 10 }).map(() => {
          return new Promise<HTMLImageElement>(resolve => {
            const img = new window.Image();
            img.src = "/img/character/yellow-face-gray.svg";
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(imageObjects);
    };

    loadImages();
  }, []);

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
        앞면
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-[154px] rounded-[10px] shadow-md overflow-hidden"
        style={{ backgroundColor: frontBackground }}>
        <Stage
          ref={stageRef}
          width={stageSize.width}
          height={stageSize.height}
          className="absolute inset-0 z-20 pointer-events-none">
          <Layer>
            <Rect width={stageSize.width} height={stageSize.height} fill={frontBackground} />
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
        <div className="relative z-20 w-full h-full pt-[54px] pb-[18px] px-8">
          <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center w-full h-full">
            {images.map((_, index) => (
              <Image
                key={index}
                src={"/img/character/yellow-face-gray.svg"}
                alt="stamp"
                width={35}
                height={35}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
