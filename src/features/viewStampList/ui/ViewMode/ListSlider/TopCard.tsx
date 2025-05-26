"use client";

import { useRouter } from "next/navigation";
import { Cafe } from "@/shared/store/cafeStore";

function TopCard({ cafe }: { cafe: Cafe }) {
  const router = useRouter();
  return (
    <div
      className="w-[133px] h-[177px] bg-white rounded-tr-2xl rounded-br-2xl shadow-md overflow-hidden cursor-pointer"
      onClick={() => router.push(`/stamplist/${cafe.cafeId}`)}>
      <img
        src={
          cafe.cafeImage ||
          "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixcafeId=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt={cafe.cafeName}
        className="w-full h-[115px] object-cover"
      />
      <div className=" pl-4">
        <img src="./img/diary.svg" alt="diary" className="relative ml-20" />
        <p className="text-[12px] font-[700] text-[#254434] truncate">{cafe.cafeName}</p>
        <p className="text-[10px] text-gray-200">{cafe.conceptIntroduction}한 카페</p>
      </div>
    </div>
  );
}

export default TopCard;
