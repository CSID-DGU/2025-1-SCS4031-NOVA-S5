"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CharacterCard from "@/features/reward/cafeDetail/ui/CharacterCard";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";
import StampModal from "@/shared/ui/modal/CafeStampModal";
import { useStampModalStore } from "@/shared/store/stampModalStore";
import { useRewardStore } from "@/shared/store/rewardStore";
import RewardCoupon from "./RewardCoupon";
import CafeInfo from "@/shared/ui/CafeInfo";
import { useCafeInfoStore } from "@/shared/store/cafeInfoStore";

export default function CafeDetailContent() {
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.cafeId === id));
  const toggleInHome = useStampBookStore(state => state.toggleInHome);

  const { cafes, fetchAndSetCafes } = useCafeInfoStore();
  const cafe = cafes.find(c => c.cafeId === id);

  const { stampModalType, setStampModalType } = useStampModalStore();
  const { rewardCounts } = useRewardStore();
  const rewardCount = rewardCounts[id] ?? 0;

  const [isDeleted, setIsDeleted] = useState(false);

  if (!book) return null;

  useEffect(() => {
    fetchAndSetCafes();
  }, []);

  const handleRegisterToggle = () => {
    toggleInHome(id);
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
        address={cafe?.address}
        phone={cafe?.cafePhone}
        hours={cafe?.openHours}
        lastOrder={cafe?.lastOrder}
      />
      <div className="w-full h-[1px] bg-green-300 mb-5" />
      <CharacterCard />
      <div className="mt-5 flex flex-col gap-5">
        {rewardCount ? (
          <>
            <p className="text-md text-font-green font-extrabold">
              리워드로 교환할 수 있는 쿠폰이 {rewardCount}개 있어요.
            </p>
            <div className="flex flex-col items-center justify-center">
              <RewardCoupon characterType={characterType} id={id} />
            </div>
          </>
        ) : (
          ""
        )}
        <p className="text-md text-font-green font-extrabold">
          으쌰으쌰, 리워드까지 {book.remainingStampCount}개 남았어요!
        </p>
        <div className="flex flex-col items-center justify-center">
          <StampBook stampBookId={book.stampBookId} characterType={characterType} />
          <Image
            src={"/img/doubletone.svg"}
            alt="카페 이미지"
            width={320}
            height={154}
            className="rounded-lg mt-[20px] shadow-sm"
          />
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
