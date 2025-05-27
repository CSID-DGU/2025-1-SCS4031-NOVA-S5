"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { saveStampBook } from "@/shared/api/stampbook";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { getSelectedCafe } from "@/features/owner/service/api";
import CafeStampBook from "./CafeStampBook";

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

  const { data: selectedCafe } = useQuery({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
    enabled: isOwner,
  });

  const cafeId = Number(params.id);
  const displayCafe = isOwner ? selectedCafe : cafe;

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

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] pb-[70px]">
      <CafeStampBook
        data={{
          stampBookId: cafeId,
          cafeName: displayCafe?.name || displayCafe?.cafeName || "카페",
          maxStampCount: 10,
          currentStampCount: 0,
          characterType: displayCafe?.characterType || "GREEN",
        }}
      />
      <img src="/img/stamp/cafe-cover.svg" alt="cafe cover" />
      <p className="text-[12px] text-[#8E8E93] text-center">{guideText}</p>
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
