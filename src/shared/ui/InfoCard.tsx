"use client";

import { useRouter } from "next/navigation";

interface InfoCardProps {
  id: string;
  name: string;
  cafe_status: string;
  business_hour: string;
  img_url: string;
}

function InfoCard(info: InfoCardProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-row gap-2 pl-3 items-center bg-[#FBFBEE] w-full h-[100px] rounded-[10px] cursor-pointer"
      onClick={() => router.push(`/stamplist/${info.id}`)}>
      <img src={info.img_url} className="w-[80px] h-[80px] rounded-[10px]" />
      <div className="flex flex-col gap-1">
        <div className="bg-[#E2ECDC] w-[45px] text-center rounded-full">
          <p className="text-[10px] text-font-green font-[]">{info.cafe_status}</p>
        </div>
        <p className="text-[14px] text-font-green font-[800]">{info.name}</p>
        <div className="flex flex-row gap-1">
          <img src="/img/clock.svg" alt="clock" />
          <p className="text-[12px] text-font-green">{info.business_hour}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
