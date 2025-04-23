"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import CharacterCard from "@/features/reward/cafeDetail/ui/CharacterCard";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";
import StampModal from "@/shared/ui/modal/CafeStampModal";
import { useStampModalStore } from "@/shared/store/stampModalStore";
import { useRewardStore } from "@/shared/store/rewardStore";
import RewardCoupon from "./RewardCoupon";

export default function CafeDetailContent() {
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === id));
  const { stampModalType, setStampModalType } = useStampModalStore();
  const { rewardCounts } = useRewardStore();
  const rewardCount = rewardCounts[id] ?? 0;
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  if (!book) return null;

  const handleRegisterToggle = () => {
    if (isRegistered) {
      setStampModalType("home-removed");
      setIsRegistered(false);
    } else {
      setStampModalType("register");
      setIsRegistered(true);
    }
  };

  const handleDeleteToggle = () => {
    if (isDeleted) {
      setIsDeleted(false);
    } else {
      setStampModalType("delete-confirm");
    }
  };

  return (
    <section className="w-full flex flex-col gap-[40px]">
      <CharacterCard />
      <div className="flex flex-col gap-5">
        {rewardCount ? (
          <>
            <p className="text-md text-font-green font-extrabold">
              리워드로 교환할 수 있는 쿠폰이 {rewardCount}개 있어요.
            </p>
            <div className="flex flex-col items-center justify-center">
              <RewardCoupon characterType={book.characterType} id={id} />
            </div>
          </>
        ) : (
          ""
        )}
        <p className="text-md text-font-green font-extrabold">
          으쌰으쌰, 리워드까지 {book.remainingStamp}개 남았어요!
        </p>
        <div className="flex flex-col items-center justify-center">
          <StampBook stampBookId={book?.id} characterType={book.characterType} />
          <Image
            src={"/img/doubletone.svg"}
            alt="카페 이미지"
            width={320}
            height={154}
            className="rounded-lg mt-[20px]"
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
          {isRegistered ? "홈에서 삭제" : "홈에 등록"}
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
        characterType={book.characterType}
        onDeleteConfirm={() => {
          setStampModalType("delete");
          setIsDeleted(true);
        }}
      />
    </section>
  );
}
