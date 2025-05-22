"use client";

import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CustomStampFrontClientProps {
  backgroundColor?: string;
  backgroundImage?: File | null;
}

export default function CustomStampFrontClient({
  backgroundColor = "#FFFDF7",
  backgroundImage,
}: CustomStampFrontClientProps) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [stageSize, setStageSize] = useState({ width: 400, height: 154 });
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 배경 이미지 로딩
  useEffect(() => {
    if (backgroundImage) {
      const img = new window.Image();
      img.src = URL.createObjectURL(backgroundImage);
      img.onload = () => {
        setBgImage(img);
      };
    } else {
      setBgImage(null);
    }
  }, [backgroundImage]);

  // 이미지 로딩
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

  // 크기 계산 (padding 포함 전체 영역 기준)
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setStageSize({
          width: rect.width,
          height: rect.height,
        });
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
        className="relative w-full h-[154px] rounded-[10px] shadow-md overflow-hidden bg-yellow-100"
        style={{ backgroundColor: backgroundColor ? backgroundColor : "#FFFDF7" }}>
        <Stage
          width={stageSize.width}
          height={stageSize.height}
          className="absolute inset-0 z-20 pointer-events-none">
          <Layer>
            <Rect width={stageSize.width} height={stageSize.height} fill={backgroundColor} />
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
            {Array.from({ length: 10 }).map((_, index) => (
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
