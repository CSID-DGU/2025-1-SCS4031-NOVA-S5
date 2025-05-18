"use client";

import CafeCharacter from "@/features/cafeDetail/ui/CafeCharacter";
import CafeStamp from "@/features/cafeDetail/ui/CafeStamp";
import RewardCard from "@/features/cafeDetail/ui/RewardCard";
import CafeInfo from "@/shared/ui/CafeInfo";

// Mock 데이터 정의
const EXAMPLE_CAFE = {
  name: "NOVA 카페",
  business_hour: "09:00 - 22:00",
  tel: "02-1234-5678",
  address: "서울특별시 성북구 화랑로 13길 60",
  reward: "아메리카노",
  cafe_img: "/img/cafe-example.jpg",
  cafe_detail: "따뜻한 분위기의 카페",
  desc: "편안한 휴식을 제공하는 공간",
  character: "YELLOW",
  stamp: {
    cafe_name: "NOVA 카페",
    logo: "/img/logo-example.svg",
    cover_img_url: "/img/cover-example.jpg",
  },
} as const;

const handleExampleSubmit = async (cafeId: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true, cafeId });
    }, 1000);
  });
};

export default function ExampleContent() {
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
            name={EXAMPLE_CAFE.name}
            hours={EXAMPLE_CAFE.business_hour}
            phone={EXAMPLE_CAFE.tel}
            address={EXAMPLE_CAFE.address}
          />
          <RewardCard />
          <CafeCharacter />
          <CafeStamp
            guideText="스탬프북은 등록 후에도 언제든지 수정할 수 있어요."
            buttonText="이대로 등록하기"
            onSubmit={handleExampleSubmit}
            successMessage="스탬프북이 등록되었습니다!"
            errorMessage="스탬프북 등록에 실패했습니다."
            showAlert={true}
          />
        </div>
      </div>
    </section>
  );
}
