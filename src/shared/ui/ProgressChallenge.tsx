import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface ProgressChallengeProps {
  challenge: {
    id: number;
    challengeTitle: string;
    currentDay: number;
    totalDay: number;
  };
  onClick?: () => void;
}

export default function ProgressChallenge({ challenge, onClick }: ProgressChallengeProps) {
  const [show, setShow] = useState(false);
  const { challengeTitle, currentDay, totalDay } = challenge;

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-[111px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center items-center rounded-lg"
      onClick={onClick}>
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
        <div className="w-[176px] flex justify-between align-items">
          <div className="flex flex-col justify-center gap-[10px]">
            <h5 className="text-[#254434] font-extrabold text-sm whitespace-nowrap">
              {challengeTitle}
            </h5>
            <div className="flex gap-1">
              <p className="text-[#254434] text-xs font-semibold">{currentDay}</p>
              <p className="text-[#254434] text-opacity-50 text-xs font-semibold">
                / {totalDay}회 진행 중!
              </p>
            </div>
          </div>
          <Image
            src={"/icon/arrow-right.svg"}
            alt="오른쪽화살표"
            width={20}
            height={20}
            style={{ width: 20, height: 20 }}
            className="cursor-pointer mt-3 "
          />
        </div>
      </div>
      <Progress value={(currentDay / totalDay) * 100} character={true} characterType="orange" />
    </div>
  );
}
