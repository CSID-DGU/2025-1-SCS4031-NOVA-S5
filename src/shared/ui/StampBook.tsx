"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Stage, Layer, Rect, Image as KonvaImage, Text } from "react-konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import { getCoverTransform } from "../utils/getCoverTransform";
import { getStampBook } from "../api/stampbook";

interface StampBookProps {
  stampBookId: number;
  characterType?: "YELLOW" | "GREEN" | "ORANGE" | "BLACK";
}

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

export default function StampBook({ stampBookId, characterType }: StampBookProps) {
  const { stampBooks, fetchAndSetStampBooks } = useStampBookStore();
  const book = stampBooks.find(b => b.stampBookId === stampBookId);
  const stageRef = useRef<KonvaStage>(null);

  const [customDesign, setCustomDesign] = useState<StampBookDesign | null>(null);
  const [bgImage, setBgImage] = useState<{
    element: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const [cafeInfo, setCafeInfo] = useState<any>(null);

  useEffect(() => {
    if (!book) fetchAndSetStampBooks();
  }, [book, fetchAndSetStampBooks]);

  useEffect(() => {
    if (book?.isCustomized && book.stampBookDesign) {
      try {
        const json = JSON.parse(book.stampBookDesign);
        setCustomDesign(json);
      } catch (err) {
        console.error("Failed to parse custom design JSON", err);
      }
    }
  }, [book?.isCustomized, book?.stampBookDesign]);

  useEffect(() => {
    if (customDesign?.front?.backgroundImage) {
      const img = new window.Image();
      img.src = customDesign.front.backgroundImage;
      img.onload = () => {
        const transform = getCoverTransform(img.width, img.height);
        setBgImage({
          element: img,
          ...transform,
        });
      };
    }
  }, [customDesign?.front?.backgroundImage]);

  useEffect(() => {
    const fetchCafeInfo = async () => {
      try {
        const res = await getStampBook(stampBookId);
        setCafeInfo(res);
      } catch (err) {
        console.error("스탬프북 정보 조회 실패", err);
      }
    };
    fetchCafeInfo();
  }, [stampBookId]);

  if (!book || !cafeInfo) return null;

  const totalStamp = book.maxStampCount;
  const cafe = book.cafeName;
  const stampedCount = book.currentStampCount;
  const lowerCharacterType = (characterType || book.characterType).toLowerCase();
  const stampedSrc = `/img/character/${lowerCharacterType}-face.svg`;
  const unstampedSrc = `/img/character/${lowerCharacterType}-face-gray.svg`;

  if (book.isCustomized && customDesign?.front) {
    return (
      <div className="w-[320px] h-[154px] relative rounded-lg overflow-hidden shadow-md">
        <Stage ref={stageRef} width={320} height={154} className="absolute inset-0">
          <Layer>
            <Rect width={320} height={154} fill={customDesign.front.backgroundColor} />
          </Layer>

          <Layer>
            {bgImage && (
              <KonvaImage
                image={bgImage.element}
                x={bgImage.x}
                y={bgImage.y}
                width={bgImage.width}
                height={bgImage.height}
                listening={false}
              />
            )}
          </Layer>

          <Layer>
            {customDesign.front.texts.map(text => (
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

        <div className="absolute inset-0 z-20 w-full h-full pt-[54px] pb-[18px] px-8 pointer-events-none">
          <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center w-full h-full">
            {Array.from({ length: totalStamp }).map((_, index) => {
              const isStamped = book.rewardClaimed ? false : index < stampedCount;
              return (
                <Image
                  key={index}
                  src={isStamped ? stampedSrc : unstampedSrc}
                  alt={isStamped ? "스탬프 찍힘" : "스탬프 안 찍힘"}
                  width={35}
                  height={35}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 기본 디자인
  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">
          {cafeInfo.cafeDesignOverview.frontCafeName || cafe}
        </p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamp }).map((_, index) => {
          const isStamped = book.rewardClaimed ? false : index < stampedCount;
          return (
            <Image
              key={index}
              src={isStamped ? stampedSrc : unstampedSrc}
              alt={isStamped ? "스탬프 찍힘" : "스탬프 안 찍힘"}
              width={35}
              height={35}
            />
          );
        })}
      </div>
    </div>
  );
}
