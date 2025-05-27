"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { saveStampBook } from "@/shared/api/stampbook";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";
import { useEffect, useState } from "react";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { Stage, Layer, Rect, Text } from "react-konva";
import Image from "next/image";

import dynamic from "next/dynamic";

const CafeStampBook = dynamic(() => import("@/features/cafeDetail/ui/CafeStampBook"), {
  ssr: false,
});

interface CafeStampProps {
  guideText?: string;
  buttonText?: string;
  onSubmit?: () => Promise<any>;
  successMessage?: string;
  errorMessage?: string;
  showAlert?: boolean;
  isOwner?: boolean;
}

function CafeStamp({
  guideText = "스탬프북을 저장하면 캐릭터를 확인할 수 있어요!",
  buttonText = "내 스탬프북에 저장",
  onSubmit,
  successMessage = "스탬프북이 저장되었습니다!",
  errorMessage = "스탬프북 생성 실패",
  showAlert = true,
  isOwner = false,
}: CafeStampProps) {
  const cafe = useCafeStore(state => state.cafe);
  const params = useParams();

  const { selectedCafe } = useSelectedCafe();
  const { designJson } = useCreateStampStore();
  const [customDesign, setCustomDesign] = useState<any>(null);

  const cafeId = Number(params.id);

  const { mutate, isPending } = useMutation({
    mutationFn: onSubmit ?? (() => saveStampBook(cafeId)),
    onSuccess: () => {
      if (showAlert) {
        alert(successMessage);
      }
    },
    onError: () => {
      if (showAlert) {
        alert(errorMessage);
      }
    },
  });

  useEffect(() => {
    if ((isOwner && designJson) || (!isOwner && cafe?.stampBookDesignJson)) {
      try {
        const json =
          isOwner && designJson
            ? JSON.parse(designJson)
            : JSON.parse(cafe?.stampBookDesignJson || "");
        setCustomDesign(json);
      } catch (error) {
        console.error("Failed to parse designJson:", error);
      }
    }
  }, [isOwner, designJson, cafe?.stampBookDesignJson]);

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] pb-[70px]">
      <CafeStampBook
        isOwner={isOwner}
        data={{
          stampBookId: cafeId,
          cafeName: isOwner ? selectedCafe?.cafeName || "카페" : cafe?.name || "카페",
          maxStampCount: 10,
          currentStampCount: 0,
          characterType: isOwner
            ? (selectedCafe?.characterType as "BLACK" | "ORANGE" | "YELLOW" | "GREEN") || "GREEN"
            : (cafe?.character as "BLACK" | "ORANGE" | "YELLOW" | "GREEN") || "GREEN",
          stampBookDesignJson: cafe?.stampBookDesignJson || "",
        }}
      />
      {customDesign?.back && (
        <div className="relative w-[380px] h-[154px]">
          <Stage width={380} height={154} className="absolute inset-0">
            <Layer>
              <Rect
                width={380}
                height={154}
                fill={customDesign.back.backgroundColor || "#FFFDF7"}
              />
            </Layer>
            <Layer>
              {customDesign.back.texts?.map((text: any) => (
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
          {customDesign.back.backgroundImage && (
            <Image
              src={customDesign.back.backgroundImage}
              alt="background"
              width={380}
              height={154}
              className="absolute inset-0"
            />
          )}
        </div>
      )}

      {!customDesign?.back && (
        <>
          <img src="/img/stamp/cafe-cover.svg" alt="cafe cover" />
          <p className="text-[12px] text-[#8E8E93] text-center">{guideText}</p>
        </>
      )}

      <button
        className="bg-[#254434] text-[#FFF] text-[12px] font-[700] h-[41px] w-fit rounded-full px-[20px] hover:bg-green-800"
        disabled={isPending}
        onClick={() => mutate()}>
        {buttonText}
      </button>
    </div>
  );
}

export default CafeStamp;
