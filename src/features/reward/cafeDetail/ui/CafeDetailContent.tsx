"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CharacterCard from "@/features/reward/cafeDetail/ui/CharacterCard";
import StampBook from "@/shared/ui/StampBook";
import StampModal from "@/shared/ui/modal/CafeStampModal";
import { useStampModalStore } from "@/shared/store/stampModalStore";
import RewardCoupon from "./RewardCoupon";
import CafeInfo from "@/shared/ui/CafeInfo";
import { Layer, Rect, Stage, Text as KonvaText, Image as KonvaImage } from "react-konva";
import { getStampBook } from "@/shared/api/stampbook";
import { getCoverTransform } from "@/shared/utils/getCoverTransform";

export default function CafeDetailContent() {
  const params = useParams();
  const id = Number(params.id);

  const { stampModalType, setStampModalType } = useStampModalStore();

  const [book, setBook] = useState<any>(null);
  const [cafe, setCafe] = useState<any>(null);
  const [rewardCount, setRewardCount] = useState<number>(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [backDesign, setBackDesign] = useState<any>(null);
  const [backBgImage, setBackBgImage] = useState<{
    element: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const fetchStampBook = async () => {
      try {
        const data = await getStampBook(id);
        setBook(data.stampBookInfo);
        setCafe(data.cafeDesignOverview);
        setRewardCount(data.rewardAvailableCount);

        if (data.stampBookInfo?.stampBookDesign) {
          const parsed = JSON.parse(data.stampBookInfo.stampBookDesign);
          const back = parsed?.back;
          setBackDesign(back ?? null);

          if (back?.backgroundImage) {
            const img = new window.Image();
            img.src = back.backgroundImage;
            img.onload = () => {
              const transform = getCoverTransform(img.width, img.height);
              setBackBgImage({
                element: img,
                ...transform,
              });
            };
          }
        }
      } catch (err) {
        console.error("스탬프북 정보 불러오기 실패", err);
      }
    };

    fetchStampBook();
  }, [id]);

  if (!book || !cafe) return null;

  const handleRegisterToggle = () => {
    setStampModalType(book?.inHome ? "home-removed" : "register");
  };

  const handleDeleteToggle = () => {
    if (isDeleted) {
      setIsDeleted(false);
    } else {
      setStampModalType("delete-confirm");
    }
  };

  const characterType = book.characterType === "BEIGE" ? "BLACK" : book.characterType;

  return (
    <section className="w-full flex flex-col gap-5">
      <div className="w-full h-[1px] bg-green-300" />
      <CafeInfo
        name={cafe?.cafeName}
        address={cafe?.roadAddress}
        phone={cafe?.cafePhone}
        hours={cafe?.openHours}
      />
      <div className="w-full h-[1px] bg-green-300 mb-5" />
      <CharacterCard />

      <div className="mt-5 flex flex-col gap-5">
        {rewardCount > 0 && (
          <>
            <p className="text-md text-font-green font-extrabold">
              리워드로 교환할 수 있는 쿠폰이 {rewardCount}개 있어요.
            </p>
            <div className="flex flex-col items-center justify-center">
              <RewardCoupon characterType={characterType} id={id} />
            </div>
          </>
        )}

        <p className="text-md text-font-green font-extrabold">
          으쌰으쌰, 리워드까지 {book.remainingStampCount}개 남았어요!
        </p>
        <div className="flex flex-col items-center justify-center">
          <StampBook stampBookId={book.stampBookId} characterType={characterType} />

          {backDesign && (
            <div className="w-[320px] h-[154px] relative mt-3 rounded-lg overflow-hidden shadow-md">
              <Stage width={320} height={154} className="absolute inset-0">
                <Layer>
                  <Rect width={320} height={154} fill={backDesign.backgroundColor || "#ffffff"} />
                  {backBgImage && (
                    <KonvaImage
                      image={backBgImage.element}
                      x={backBgImage.x}
                      y={backBgImage.y}
                      width={backBgImage.width}
                      height={backBgImage.height}
                      listening={false}
                    />
                  )}
                  {backDesign.texts?.map((text: any) => (
                    <KonvaText
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

          <p className="w-[320px] mt-[10px] pl-[215px] text-[10px] font-medium text-font-green cursor-pointer">
            적립 상세 내역 보러가기 &gt;
          </p>
        </div>
      </div>

      <div className="w-full h-[41px] flex items-center justify-center gap-[30px]">
        <button
          className="w-1/2 h-full bg-font-green text-[#fff] text-xs font-bold rounded-full outline-none"
          onClick={handleRegisterToggle}>
          {book?.inHome ? "홈에서 삭제" : "홈에 등록"}
        </button>
        <button
          className="w-1/2 h-full bg-font-green text-[#fff] text-xs font-bold rounded-full outline-none"
          onClick={handleDeleteToggle}>
          {isDeleted ? "내 스탬프북에 저장" : "내 스탬프북에서 삭제"}
        </button>
      </div>

      <StampModal
        isOpen={stampModalType !== null}
        setIsOpen={() => setStampModalType(null)}
        characterType={characterType}
        onDeleteConfirm={() => {
          setStampModalType("delete");
          setIsDeleted(true);
        }}
      />
    </section>
  );
}
