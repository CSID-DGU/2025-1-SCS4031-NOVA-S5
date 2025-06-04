"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Stage, Layer, Rect, Text, Image as KonvaImage } from "react-konva";
import { Stage as KonvaStage } from "konva/lib/Stage";
import { useCustomStore } from "@/shared/store/customStore";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import Image from "next/image";

interface CustomStampBackProps {
  backgroundColor?: string;
  backgroundImage?: File | null;
}

const CustomStampBack = React.memo(function CustomStampBackClient({
  backgroundColor = "#FFFDF7",
  backgroundImage,
}: CustomStampBackProps) {
  const texts = useCustomStore(state => state.texts);
  const updateText = useCustomStore(state => state.updateText);
  const removeText = useCustomStore(state => state.removeText);
  const setBackStageRef = useCreateStampStore(state => state.setBackStageRef);

  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [overlayPos, setOverlayPos] = useState<{ x: number; y: number } | null>(null);
  const [stageSize, setStageSize] = useState({ width: 400, height: 154 });
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<KonvaStage>(null);

  useEffect(() => {
    if (stageRef.current) {
      setBackStageRef(stageRef as React.RefObject<KonvaStage>);
    }
  }, [stageRef.current, setBackStageRef]);

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

  const backTexts = useMemo(() => texts.filter(t => t.side === "back"), [texts]);

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
        뒷면
      </div>
      <div
        ref={containerRef}
        className="relative w-[320px] h-[154px] rounded-[10px] shadow-md overflow-hidden bg-yellow-100 mx-auto"
        style={{ backgroundColor: backgroundColor ? backgroundColor : "#FFFDF7" }}>
        <Stage
          ref={stageRef}
          width={stageSize.width}
          height={stageSize.height}
          className="absolute inset-0">
          <Layer>
            <Rect width={stageSize.width} height={stageSize.height} fill={backgroundColor} />
            {bgImage && (
              <KonvaImage
                image={bgImage}
                width={stageSize.width}
                height={stageSize.height}
                alt="background"
                className="absolute inset-0"
              />
            )}
          </Layer>
          <Layer>
            {backTexts.map(text => (
              <Text
                key={text.id}
                text={text.text}
                x={text.x}
                y={text.y}
                fontSize={24}
                fontFamily={text.font}
                fill={text.color}
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

export default CustomStampBack;
