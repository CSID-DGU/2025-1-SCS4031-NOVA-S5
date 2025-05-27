"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Stage, Layer, Rect, Image as KonvaImage, Text } from "react-konva";
import { useCustomStore } from "@/shared/store/customStore";
import { Stage as KonvaStage } from "konva/lib/Stage";
import Image from "next/image";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";

interface CustomStampFrontProps {
  backgroundColor?: string;
  backgroundImage?: File | null;
}

const CustomStampFront = React.memo(function CustomStampFrontClient({
  backgroundColor = "#FFFDF7",
  backgroundImage,
}: CustomStampFrontProps) {
  const { selectedCafe } = useSelectedCafe();
  const texts = useCustomStore(state => state.texts);
  const updateText = useCustomStore(state => state.updateText);
  const removeText = useCustomStore(state => state.removeText);

  const setFrontStageRef = useCreateStampStore(state => state.setFrontStageRef);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [stageSize, setStageSize] = useState({ width: 400, height: 154 });
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [overlayPos, setOverlayPos] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<KonvaStage>(null);
  const characterType = selectedCafe?.characterType?.toLowerCase() || "yellow";

  useEffect(() => {
    if (stageRef.current) {
      setFrontStageRef(stageRef as React.RefObject<KonvaStage>);
    }
  }, [stageRef.current, setFrontStageRef]);

  useEffect(() => {
    const loadImages = async () => {
      const imageObjects = await Promise.all(
        Array.from({ length: 10 }).map(() => {
          return new Promise<HTMLImageElement>(resolve => {
            const img = new window.Image();
            img.src = `/img/character/${characterType}-face-gray.svg`;
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(imageObjects);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!backgroundImage) {
      setBgImage(null);
      return;
    }
    const img = new window.Image();
    img.src = URL.createObjectURL(backgroundImage);
    img.onload = () => setBgImage(img);
    return () => URL.revokeObjectURL(img.src);
  }, [backgroundImage]);

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

  const frontTexts = useMemo(() => texts.filter(t => t.side === "front"), [texts]);

  const handleTextClick = useCallback((text: any) => {
    setSelectedTextId(text.id);
    setEditValue(text.text);
    setOverlayPos({ x: text.x, y: text.y });
  }, []);

  const handleEditComplete = useCallback(
    (id: string) => {
      updateText(id, { text: editValue });
      setSelectedTextId(null);
      setOverlayPos(null);
    },
    [editValue, updateText]
  );

  const handleDelete = useCallback(
    (id: string) => {
      removeText(id);
      setSelectedTextId(null);
      setOverlayPos(null);
    },
    [removeText]
  );

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-[50px] h-[33px] py-1 bg-green-300 rounded-[10px] text-md font-bold text-font-green text-center">
        앞면
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-[154px] rounded-[10px] shadow-md overflow-hidden"
        style={{ backgroundColor: backgroundColor ? backgroundColor : "#FFFDF7" }}>
        <Stage
          ref={stageRef}
          width={stageSize.width}
          height={stageSize.height}
          className="absolute inset-0 z-20">
          {/* 배경 */}
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

          {/* 텍스트 */}
          <Layer>
            {frontTexts.map(text => (
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
                draggable
                onDragEnd={e => {
                  const { x, y } = e.target.attrs;
                  updateText(text.id, { x, y });
                }}
                onClick={() => handleTextClick(text)}
                onTap={() => handleTextClick(text)}
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

        {selectedTextId && overlayPos && (
          <div
            style={{
              position: "absolute",
              left: overlayPos.x,
              top: overlayPos.y,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.95)",
              borderRadius: 6,
              padding: "2px 8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}>
            <input
              autoFocus
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onBlur={() => handleEditComplete(selectedTextId)}
              onKeyDown={e => {
                if (e.key === "Enter") handleEditComplete(selectedTextId);
              }}
              className="text-lg border border-[#ccc] rounded-[8px] p-1 w-[120px] outline-none"
            />
            <button
              onMouseDown={e => {
                e.preventDefault();
                handleDelete(selectedTextId);
              }}
              style={{
                background: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "2px 8px",
                cursor: "pointer",
              }}>
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default CustomStampFront;
