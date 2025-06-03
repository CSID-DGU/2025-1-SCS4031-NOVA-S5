"use client";

import Image from "next/image";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";
import { Stage, Layer, Rect, Text, Image as KonvaImage } from "react-konva";
import { useEffect, useState } from "react";

interface StampBookDesign {
  front: {
    backgroundColor: string;
    backgroundImage: string | null;
    texts: Array<{
      id: string;
      text: string;
      x: number;
      y: number;
      color: string;
      font: string;
      side: string;
    }>;
  };
}

interface OwnerStampBookProps {
  designJson?: string;
}

export default function OwnerStampBook({ designJson }: OwnerStampBookProps) {
  const { selectedCafe } = useSelectedCafe();
  const [customDesign, setCustomDesign] = useState<StampBookDesign | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const totalStamps = 10;
  const stampedCount = 3;
  const characterType = selectedCafe?.characterType?.toLowerCase() || "yellow";

  useEffect(() => {
    if (designJson) {
      try {
        const json = JSON.parse(designJson);
        setCustomDesign(json);
      } catch (error) {
        console.error("Failed to parse designJson:", error);
      }
    }
  }, [designJson]);

  useEffect(() => {
    const loadImages = async () => {
      const imageObjects = await Promise.all(
        Array.from({ length: 10 }).map((_, index) => {
          return new Promise<HTMLImageElement>(resolve => {
            const img = new window.Image();
            img.src =
              index < stampedCount
                ? `/img/character/${characterType}-face.svg`
                : `/img/character/${characterType}-face-gray.svg`;
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(imageObjects);
    };

    loadImages();
  }, [characterType]);

  useEffect(() => {
    if (customDesign?.front?.backgroundImage) {
      const img = new window.Image();
      img.src = customDesign.front.backgroundImage;
      img.onload = () => setBgImage(img);
    }
  }, [customDesign?.front?.backgroundImage]);

  if (customDesign?.front) {
    return (
      <div className="relative w-[320px] h-[154px] rounded-[10px] shadow-md overflow-hidden">
        <Stage width={320} height={154} className="absolute inset-0">
          <Layer>
            <Rect width={320} height={154} fill={customDesign.front.backgroundColor || "#FEF08A"} />
          </Layer>
          <Layer>
            {bgImage && <KonvaImage image={bgImage} alt="background" width={320} height={154} />}
          </Layer>
          <Layer>
            {customDesign.front.texts?.map(text => (
              <Text
                key={text.id}
                text={text.text}
                x={text.x}
                y={text.y}
                fontSize={24}
                fontFamily={text.font || "Pretendard"}
                fill={text.color || "#000"}
                align="center"
                verticalAlign="middle"
              />
            ))}
          </Layer>
        </Stage>

        <div className="absolute inset-0 z-20 w-full h-full pt-[54px] pb-[18px] px-8 pointer-events-auto">
          <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center w-full h-full">
            {images.map((_, index) => (
              <Image key={index} src={images[index].src} alt="stamp" width={35} height={35} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{selectedCafe?.cafeName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamps }).map((_, index) => (
          <Image
            key={index}
            src={
              index < stampedCount
                ? `/img/character/${characterType}-face.svg`
                : `/img/character/${characterType}-face-gray.svg`
            }
            alt="stamp"
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
