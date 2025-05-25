"use client";

import CafeCharacter from "@/features/cafeDetail/ui/CafeCharacter";
import CafeStamp from "@/features/cafeDetail/ui/CafeStamp";
import RewardCard from "@/features/cafeDetail/ui/RewardCard";
import CafeInfo from "@/shared/ui/CafeInfo";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getSelectedCafe } from "@/features/owner/service/api";
import { Cafe } from "../model/cafe";
import { formatBusinessHours } from "@/shared/utils/date";
import { createStampBook } from "@/shared/api/stampbook";
import { useCreateStampStore } from "@/shared/store/createStampStore";
import { useRouter } from "next/navigation";

export default function ExampleContent() {
  const router = useRouter();
  const { data: selectedCafe } = useQuery<Cafe>({
    queryKey: ["selectedCafe"],
    queryFn: getSelectedCafe,
  });

  const {
    stampBookName,
    cafeIntroduction,
    conceptIntroduction,
    rewardDescription,
    exposed,
    resetStore,
  } = useCreateStampStore();

  const { mutate: createStampBookMutation } = useMutation({
    mutationFn: async () => {
      const result = await createStampBook({
        stampBookName,
        cafeIntroduction,
        conceptIntroduction,
        rewardDescription,
        exposed: exposed === null ? false : exposed,
      });
      return result;
    },
    onSuccess: () => {
      resetStore();
      router.push("/owner/stampbook");
    },
    onError: () => {
      alert("스탬프북 등록에 실패했습니다.");
    },
  });

  if (!selectedCafe) {
    return null;
  }

  const businessHours = formatBusinessHours(selectedCafe.openHours, selectedCafe.specialDays);

  return (
    <section className="flex flex-col mt-[25px] px-[25px] gap-[20px]">
      <p className="text-md text-[#000] font-bold">👀 고객님께 이렇게 보여요!</p>
      <div>
        <div className="flex flex-row gap-1 mb-5">
          <img src="/icon/info.svg" alt="info" />
          <p className="text-font-green text-[16px] font-[800]">Cafe Information</p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <CafeInfo
            name={selectedCafe.cafeName}
            hours={businessHours}
            phone={selectedCafe.cafePhone}
            address={selectedCafe.address || "주소 정보 없음"}
          />
          <RewardCard isOwner={true} />
          <CafeCharacter isOwner={true} />
          <CafeStamp
            guideText="스탬프북은 등록 후에도 언제든지 수정할 수 있어요."
            buttonText="이대로 등록하기"
            onSubmit={async () => {
              createStampBookMutation();
            }}
            successMessage="스탬프북이 등록되었습니다!"
            errorMessage="스탬프북 등록에 실패했습니다."
            showAlert={true}
            isOwner={true}
          />
        </div>
      </div>
    </section>
  );
}
