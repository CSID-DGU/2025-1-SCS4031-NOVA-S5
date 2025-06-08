import Image from "next/image";
import { useEffect, useState } from "react";
import { getChallengeDay } from "../utils";

interface ChallengeData {
  id: number;
  challengeTitle: string;
  description: string;
  startDate: string;
  endDate: string;
  cafeName?: string;
}

interface ChallengeCardProps {
  challenge: ChallengeData;
  onClick?: () => void;
}

export default function ChallengeCard({ challenge, onClick }: ChallengeCardProps) {
  const [show, setShow] = useState(false);
  const { cafeName, challengeTitle, description, startDate, endDate } = challenge;

  const { message } = getChallengeDay(new Date(startDate), new Date(endDate));

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[111px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center items-center rounded-lg"
      onClick={onClick}>
      {/* 오른쪽 상단 남은 일자 표시 */}
      <div className="absolute top-2 right-3 text-[11px] text-right text-[#254434] font-semibold">
        {message}
      </div>

      <div className="flex justify-start items-center gap-3 w-full h-[60px]">
        <div className="w-[60px] h-[60px] bg-green-400 rounded-lg">
          <Image
            src={"/img/coffee-cup.svg"}
            alt="커피컵"
            width={60}
            height={60}
            className={`rounded-lg transition-opacity ${
              show ? "animate-fade-in" : "animate-fade-out"
            }`}
          />
        </div>
        <div className="w-[176px] flex justify-between items-center">
          <div className="flex flex-col justify-center gap-[10px]">
            <p className="text-[#25443480] text-[10px] font-semibold">{cafeName}</p>
            <h5 className="text-[#254434] font-extrabold text-sm whitespace-nowrap">
              {challengeTitle}
            </h5>
            <div className="flex gap-1">
              <p className="text-[#254434] text-opacity-50 text-xs font-semibold">
                성공하면 {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
