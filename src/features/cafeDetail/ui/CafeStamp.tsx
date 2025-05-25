"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { saveStampBook } from "@/shared/api/stampbook";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import StampBook from "@/shared/ui/StampBook";
import { useQuery } from "@tanstack/react-query";
import { getSelectedCafe } from "@/features/owner/service/api";

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
  onSubmit = () => saveStampBook(Number(useParams().id)),
  successMessage = "스탬프북이 저장되었습니다!",
  errorMessage = "스탬프북 생성 실패",
  showAlert = true,
  isOwner = false,
}: CafeStampProps) {
  const cafe = useCafeStore(state => state.cafe);
  const { data: selectedCafe } = useQuery({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
    enabled: isOwner,
  });

  const displayName = isOwner ? selectedCafe?.cafeName : cafe?.name;

  const { mutate, isPending } = useMutation({
    mutationFn: onSubmit,
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
      <StampBook cafeName={displayName} />
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
