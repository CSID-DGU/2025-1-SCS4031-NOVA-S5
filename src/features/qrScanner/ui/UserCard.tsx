"use client";

import QrModal from "@/shared/ui/modal/QrModal";
import dynamic from "next/dynamic";
import { useState } from "react";

const Character = dynamic(() => import("./Character"), { ssr: false });

function UserCard() {
  const [isOpen, setIsOpen] = useState(false);
  const mockUserData = {
    name: "나무심는김노바",
    profileImage:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    fortuneOfToday: "오늘도 커피 한 잔 하고\n 2개의 리워드를 얻어보세요!",
    stamp: 2,
    reward: 3,
  };

  return (
    <div className="relative bg-[#E2ECDC] rounded-[10px] p-[16px] w-[330px] h-[184px] overflow-hidden">
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-[12px]">
          <img
            src={mockUserData.profileImage}
            alt="profile"
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <p className="text-[17px] font-[700] text-[#254434]">{mockUserData.name}님</p>
        </div>
        <div className="flex gap-10">
          <p className="whitespace-pre-line text-[12px] text-[#8E8E93] ml-[35px]">
            {mockUserData.fortuneOfToday}
          </p>
          <img src="./icon/qr.svg" alt="qr" />
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="flex gap-[10px] mt-[10px] ml-[35px]">
          <img src="/icon/stamp.svg" alt="stamp" />
          <p className="text-[12px] text-[#121212] font-[600]">
            모은 스탬프 {mockUserData.stamp}개
          </p>
        </div>
        <div className="flex gap-[10px] mt-[10px] ml-[35px]">
          <img src="/icon/reward.svg" alt="reward" />
          <p className="text-[12px] text-[#121212] font-[600]">
            얻은 리워드 {mockUserData.reward}개
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-[80px] right-[230px] w-[60px] h-[480px]"
        onClick={() => setIsOpen(true)}>
        <Character />
      </div>
      <QrModal
        userName={
          <>
            kimnova님의 <br />
            프로필 QR
          </>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default UserCard;
