"use client";

import CafeContent from "@/features/cafeDetail/ui/CafeContent";
import CafeHeader from "@/features/cafeDetail/ui/CafeHeader";
import { useCafeStore } from "@/shared/store/cafeDetailStore";
import { useEffect } from "react";

const mockData = {
  name: "충무로 더블톤",
  business_hour: "9:00~20:00 (Last Order 19:30)",
  tel: "02-1234-5678",
  address: "서울특별시 양천구 어쩌구 저쩌구",
  reward: "커피 한 잔",
  cafa_img: "",
  cafe_detail: "카페 '더블톤의 따뜻한 내부 분위기를 녹여냈어요.",
  desc: "몽글몽글한 감성을 스탬프북에서 느껴보세요.",
  character: "yellow",
  stamp: {
    cafe_name: "충무로 더블톤",
    logo: "/img/stamp/stamp-logo.svg",
    cover_img_url: "/img/stamp/stamp-cover.svg",
  },
};

export default function CafeDetailPage() {
  const { cafe, setCafe } = useCafeStore();

  useEffect(() => {
    setCafe(mockData);
  }, []);

  return (
    <div>
      <CafeHeader name={mockData.name} />
      <CafeContent />
    </div>
  );
}
