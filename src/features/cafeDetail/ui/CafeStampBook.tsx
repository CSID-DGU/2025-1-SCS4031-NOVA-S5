"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Image as KonvaImage, Text } from "react-konva";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { Stage as KonvaStage } from "konva/lib/Stage";

interface StampBookProps {
  data: {
    stampBookId: number;
    cafeName: string;
    maxStampCount: number;
    currentStampCount: number;
    characterType: "YELLOW" | "GREEN" | "ORANGE" | "BLACK";
  };
  isOwner?: boolean;
}

export default function CafeStampBook({ data, isOwner = false }: StampBookProps) {
  const { cafeName, maxStampCount, currentStampCount, characterType } = data;
  const { designJson } = useCreateStampStore();
  const stageRef = useRef<KonvaStage>(null);
  const [customDesign, setCustomDesign] = useState<any>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const lowerCharacterType = characterType.toLowerCase();
  const stampedSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const unstampedSrc = `/img/character/${lowerCharacterType}-face-gray.svg`;

  useEffect(() => {
    if (isOwner && designJson) {
      try {
        const json = JSON.parse(designJson);
        setCustomDesign(json);
      } catch (error) {
        console.error("Failed to parse designJson:", error);
      }
    }
  }, [isOwner, designJson]);

  useEffect(() => {
    const loadImages = async () => {
      const imageObjects = await Promise.all(
        Array.from({ length: 10 }).map(() => {
          return new Promise<HTMLImageElement>(resolve => {
            const img = new window.Image();
            img.src = unstampedSrc;
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(imageObjects);
    };

    loadImages();
  }, []);

  if (isOwner && customDesign?.front) {
    const frontDesign = customDesign.front;
    return (
      <div className="w-[320px] h-[154px] relative rounded-lg overflow-hidden">
        <Stage ref={stageRef} width={320} height={154} className="absolute inset-0">
          <Layer>
            <Rect width={320} height={154} fill={frontDesign.backgroundColor} />
            {frontDesign.backgroundImage && (
              <Image src={frontDesign.backgroundImage} alt="background" width={320} height={154} />
            )}
            {frontDesign.texts?.map((text: any) => (
              <Text
                key={text.id}
                text={text.text}
                x={text.x}
                y={text.y}
                fontSize={24}
                fontFamily={text.font || "Arial"}
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
    );
  }

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{cafeName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: maxStampCount }).map((_, index) => (
          <img
            key={index}
            src={index < currentStampCount ? stampedSrc : unstampedSrc}
            alt={index < currentStampCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            width={35}
            height={35}
            style={{ width: 35, height: 35 }}
          />
        ))}
      </div>
    </div>
  );
}
