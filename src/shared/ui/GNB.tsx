"use client";
import { useRouter } from "next/navigation";

export default function GNB() {
  const router = useRouter();

  return (
    <div className="bg-yellow-300 px-[27px] py-[18px] flex justify-between items-center shadow-[0px -6px 14px 0px rgba(47, 47, 47, 0.04)]">
      <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
        <img src="/icon/magazine.svg" alt="매거진" className="w-[26px] h-[26px]" />
        <p className="text-[#9C9CA1B2] text-[10px]">매거진</p>
      </div>
      <div
        className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        onClick={() => router.push("/reward")}>
        <img src="/icon/reward-history.svg" alt="적립내역" className="w-[26px] h-[26px]" />
        <p className="text-[#9C9CA1B2] text-[10px]">적립 내역</p>
      </div>
      <div
        className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        onClick={() => router.push("/main")}>
        <img src="/icon/home.svg" alt="메인" className="w-[26px] h-[26px]" />
        <p className="text-[#9C9CA1B2] text-[10px]">홈</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
        <img src="/icon/stamp-book.svg" alt="스탬프북" className="w-[26px] h-[26px]" />
        <p className="text-[#9C9CA1B2] text-[10px]">스탬프북</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
        <img src="/icon/user.svg" alt="마이페이지" className="w-[26px] h-[26px]" />
        <p className="text-[#9C9CA1B2] text-[10px]">마이페이지</p>
      </div>
    </div>
  );
}
