"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CharacterCard from "@/features/reward/cafeDetail/ui/CharacterCard";
import StampBook from "@/shared/ui/StampBook";
import StampModal from "@/shared/ui/modal/CafeStampModal";
import { useStampModalStore } from "@/shared/store/stampModalStore";
import RewardCoupon from "./RewardCoupon";
import CafeInfo from "@/shared/ui/CafeInfo";
import { Layer, Rect, Stage, Text as KonvaText, Image as KonvaImage } from "react-konva";
import { deleteStampBook, fetchMyStampBooks, getStampBook } from "@/shared/api/stampbook";
import { getCoverTransform } from "@/shared/utils/getCoverTransform";
import { formatBusinessHours } from "@/shared/utils/date";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import Modal from "@/shared/ui/modal/Modal";

export default function CafeDetailContent() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const { stampModalType, setStampModalType } = useStampModalStore();
  const toggleInHome = useStampBookStore(state => state.toggleInHome);

  const [book, setBook] = useState<any>(null);
  const [cafe, setCafe] = useState<any>(null);
  const [rewardCount, setRewardCount] = useState<number>(0);

  const [inHome, setInHome] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);

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
        const myStampBooks = await fetchMyStampBooks();
        const matched = myStampBooks.find((book: any) => book.cafeId === id);

        if (!matched) {
          console.error("해당 카페의 스탬프북을 찾을 수 없습니다.");
          return;
        }

        const data = await getStampBook(matched.stampBookId);
        setBook(data.stampBookInfo);
        setCafe(data.cafeDesignOverview);
        setRewardCount(data.rewardAvailableCount);
        setInHome(data.stampBookInfo?.inHome ?? false);

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
    toggleInHome(id);
    setInHome(prev => !prev);
    setStampModalType(inHome ? "home-removed" : "register");
  };

  const handleDeleteToggle = () => {
    setIsFirstModalOpen(true);
    setIsDeleted(false);
  };

  const characterType = book.characterType === "BEIGE" ? "BLACK" : book.characterType;

  const businessHours = formatBusinessHours(cafe.openHours, cafe.specialDays);

  return (
    <>
      <section className="w-full flex flex-col gap-5">
        <div className="w-full h-[1px] bg-green-300" />
        <CafeInfo
          name={cafe?.cafeName}
          address={cafe?.roadAddress}
          phone={cafe?.cafePhone}
          hours={businessHours}
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
          <div className="flex flex-col items-center justify-center gap-5">
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

            {!backDesign && (
              <>
                <div
                  className="w-[320px] h-[154px] rounded-lg flex items-center justify-center shadow-md"
                  style={{
                    backgroundColor: cafe.backImageUrl ? "" : "#0000004D",
                    backgroundImage: cafe.backImageUrl ? `url(${cafe.backImageUrl})` : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  <p className="text-md text-[#fff] text-center">
                    {cafe.backCafeName || book.cafeName}
                  </p>
                </div>
              </>
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
            {inHome ? "홈에서 삭제" : "홈에 등록"}
          </button>
          <button
            className="w-1/2 h-full bg-font-green text-[#fff] text-xs font-bold rounded-full outline-none"
            onClick={handleDeleteToggle}>
            {isDeleted ? "내 스탬프북에 저장" : "내 스탬프북에서 삭제"}
          </button>
        </div>
      </section>
      <StampModal
        isOpen={stampModalType !== null}
        setIsOpen={() => setStampModalType(null)}
        characterType={characterType}
        onDeleteConfirm={() => {
          setStampModalType("delete");
          setIsDeleted(true);
        }}
      />

      <Modal
        isOpen={isFirstModalOpen}
        setIsOpen={setIsFirstModalOpen}
        characterType={book.characterType}
        button="double"
        mainText={
          <p className="text-md text-font-green font-bold text-center">정말 삭제하시겠어요?</p>
        }
        subText={
          <p className="text-sm text-font-green font-semibold text-center">
            내 스탬프북에서 삭제하면 모은 스탬프도 사라져요!
          </p>
        }
        leftButtonText="아니요"
        rightButtonText="네"
        onRightButtonClick={async () => {
          try {
            await deleteStampBook(book.stampBookId);
            setIsFirstModalOpen(false);
            setIsSecondModalOpen(true);
          } catch (err) {
            console.error("삭제 실패", err);
          }
        }}
      />
      <Modal
        isOpen={isSecondModalOpen}
        setIsOpen={setIsSecondModalOpen}
        characterType={book.characterType}
        button="single"
        mainText={
          <p className="text-md text-font-green font-bold text-center">
            내 스탬프북이 삭제됐어요.
            <br />
            다음에 또 찾아주세요!
          </p>
        }
        rightButtonText="확인"
        onRightButtonClick={() => {
          router.push("/reward");
        }}
      />
    </>
  );
}
