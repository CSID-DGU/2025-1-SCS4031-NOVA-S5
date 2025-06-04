"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { saveStampBook } from "@/shared/api/stampbook";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useSelectedCafe } from "@/shared/hooks/useSelectedCafe";
import { useEffect, useState } from "react";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { Stage, Layer, Rect, Text, Image as KonvaImage } from "react-konva";
import dynamic from "next/dynamic";
import { getCoverTransform } from "@/shared/utils/getCoverTransform";
import Modal from "@/shared/ui/modal/Modal";
import { useUserInfo } from "@/shared/hooks";
import { useStampEditStore } from "@/shared/store/stampEditStore";

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
  onSuccess?: () => void;
}

function CafeStamp({
  guideText = "스탬프북을 저장하면 캐릭터를 확인할 수 있어요!",
  buttonText = "내 스탬프북에 저장",
  onSubmit,
  errorMessage = "이미 저장한 스탬프북이에요.",
  showAlert = true,
  isOwner = false,
  onSuccess,
}: CafeStampProps) {
  const cafe = useCafeStore(state => state.cafe);
  const params = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { selectedCafe } = useSelectedCafe();
  const { userInfo } = useUserInfo();
  const { designJson } = useCreateStampStore();
  const { frontName, backName, backImageUrl } = useStampEditStore();

  const [customDesign, setCustomDesign] = useState<any>(null);
  const [bgImage, setBgImage] = useState<{
    element: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const cafeId = Number(params.id);

  const { mutate, isPending } = useMutation({
    mutationFn: onSubmit ?? (() => saveStampBook(cafeId)),
    onSuccess: () => {
      if (showAlert) {
        setIsOpen(true);
      }
      onSuccess?.();
    },
    onError: () => {
      if (showAlert) {
        alert(errorMessage);
      }
    },
  });

  const characterInfo: Record<"YELLOW" | "ORANGE" | "BLACK" | "GREEN", { name: string }> = {
    YELLOW: {
      name: "팡이",
    },
    ORANGE: {
      name: "쿡이",
    },
    BLACK: {
      name: "콕이",
    },
    GREEN: {
      name: "꼭이",
    },
  };

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

  useEffect(() => {
    if (customDesign?.back?.backgroundImage) {
      const img = new window.Image();
      img.src = customDesign.back.backgroundImage;
      img.onload = () => {
        const transform = getCoverTransform(img.width, img.height);
        setBgImage({
          element: img,
          ...transform,
        });
      };
    }
  }, [customDesign?.back?.backgroundImage]);

  const characterType = isOwner
    ? (selectedCafe?.characterType as "BLACK" | "ORANGE" | "YELLOW" | "GREEN") || "GREEN"
    : (cafe?.character as "BLACK" | "ORANGE" | "YELLOW" | "GREEN") || "GREEN";

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[20px] pb-[70px]">
        <CafeStampBook
          isOwner={isOwner}
          data={{
            stampBookId: cafeId,
            cafeName: isOwner ? selectedCafe?.cafeName || "카페" : cafe?.name || "카페",
            maxStampCount: 10,
            currentStampCount: 0,
            characterType: characterType,
            stampBookDesignJson: cafe?.stampBookDesignJson || "",
          }}
        />

        {customDesign?.back && (
          <div className="relative w-[320px] h-[154px] rounded-lg overflow-hidden">
            <Stage width={320} height={154} className="absolute inset-0">
              <Layer>
                <Rect
                  width={320}
                  height={154}
                  fill={customDesign.back.backgroundColor || "#FFFDF7"}
                />
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
          </div>
        )}

        {!customDesign?.back && (
          <>
            <div
              className="w-[320px] h-[154px] rounded-lg flex items-center justify-center shadow-md"
              style={{
                backgroundColor: backImageUrl ? undefined : "#0000004D",
                backgroundImage: backImageUrl ? `url(${backImageUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <p className="text-md text-[#fff] text-center">
                {backName || selectedCafe?.cafeName}
              </p>
            </div>
          </>
        )}

        <button
          className="bg-[#254434] text-[#FFF] text-[12px] font-[700] h-[41px] w-fit rounded-full px-[20px] hover:bg-green-800"
          disabled={isPending}
          onClick={() => mutate()}>
          {buttonText}
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mainText={
          <p className="text-md text-font-green font-bold text-center">
            안녕하세요! 제 이름은 {characterInfo[characterType]?.name}에요.
          </p>
        }
        subText={
          <p className="text-sm text-[#8E8E93] font-medium text-center">
            앞으로 제가 {userInfo?.name || "회원"} 님의 스탬프 적립을 도와드릴게요.
          </p>
        }
        button="single"
        rightButtonText="내 스탬프북 보러가기"
        onRightButtonClick={() => router.push(`/reward/${cafeId}`)}
      />
    </>
  );
}

export default CafeStamp;
