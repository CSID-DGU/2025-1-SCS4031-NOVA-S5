import Image from "next/image";
import { useEffect, useState } from "react";

interface ChallengeData {
  id: number;
  challengeTitle: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface ChallengeCardProps {
  challenge: ChallengeData;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const [show, setShow] = useState(false);

  const { challengeTitle, description } = challenge;

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[111px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center items-center rounded-lg">
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
            <h5 className="text-[#254434] font-extrabold text-sm whitespace-nowrap">
              {challengeTitle}
            </h5>
            <div className="flex gap-1">
              <p className="text-[#254434] text-opacity-50 text-xs font-semibold">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
