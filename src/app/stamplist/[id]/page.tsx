"use client";

import { useCafe } from "@/features/cafeDetail/hooks";
import CafeContent from "@/features/cafeDetail/ui/CafeContent";
import CafeHeader from "@/features/cafeDetail/ui/CafeHeader";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CafeDetailPage() {
  const { id } = useParams();
  const cafeId = Number(id);
  const { data: cafeData, isLoading, isError } = useCafe(cafeId);
  const { cafe, setCafe } = useCafeStore();
  console.log(cafeData);

  useEffect(() => {
    if (cafeData) {
      setCafe({
        name: cafeData.cafeName,
        business_hour: "9:00~20:00 (Last Order 19:30)", // TODO: API에서 받아오기
        tel: cafeData.cafePhone || "",
        address: `${cafeData.latitude}, ${cafeData.longitude}`, // TODO: 주소 변환 필요
        reward: "커피 한 잔", // TODO: API에서 받아오기
        cafe_img: "", // TODO: API에서 이미지 URL 받아오기
        cafe_detail: cafeData.cafeIntroduction || "",
        desc: cafeData.conceptIntroduction || "",
        character: cafeData.characterType || "GREEN",
        stamp: {
          cafe_name: cafeData.cafeName,
          logo: "/img/stamp/stamp-logo.svg",
          cover_img_url: "/img/stamp/stamp-cover.svg",
        },
      });
    }
  }, [cafeData, setCafe]);

  if (isLoading) return <div className="p-4">카페 정보를 불러오는 중입니다...</div>;
  if (isError) return <div className="p-4">카페 정보를 불러오지 못했습니다.</div>;
  if (!cafe) return null;

  return (
    <div className="relative flex flex-col h-screen">
      <div className="relative top-0">
        <CafeHeader name={cafeData!.cafeName} />
      </div>
      <div className="flex overflow-y-auto scrollbar-hide justify-center">
        <CafeContent />
      </div>
    </div>
  );
}
