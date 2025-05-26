"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { createStampBook } from "@/shared/api/stampbook";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import CafeStampBook from "./CafeStampBook";

function CafeStamp() {
  const cafe = useCafeStore(state => state.cafe);
  const { id } = useParams();
  const cafeId = Number(id);

  const { mutate, isPending } = useMutation({
    mutationFn: () => createStampBook(cafeId),
    onSuccess: () => {
      alert("스탬프북이 저장되었습니다!");
    },
    onError: () => {
      alert("스탬프북 생성 실패");
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] pb-[70px]">
      <CafeStampBook
        data={{
          stampBookId: cafeId,
          cafeName: cafe?.name || "카페",
          maxStampCount: 10,
          currentStampCount: 0,
          characterType: cafe?.character || "GREEN",
        }}
      />
      <img src="/img/stamp/cafe-cover.svg" alt="cafe cover" />
      <p className="text-[12px] text-[#8E8E93] text-center">
        스탬프북을 저장하면 캐릭터를 확인할 수 있어요!
      </p>
      <button
        className="bg-[#254434] text-[#FFF] text-[12px] font-[700] h-[41px] w-fit rounded-full px-[20px] hover:bg-green-800"
        disabled={isPending}
        onClick={() => mutate()}>
        내 스탬프북에 저장
      </button>
    </div>
  );
}

export default CafeStamp;
