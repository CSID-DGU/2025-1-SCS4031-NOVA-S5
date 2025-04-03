import Image from "next/image";
import coffee from "../../../../public/coffee-cup.svg";
import arrowRight from "../../../../public/arrow-right.svg";
import { Progress } from "@/components/ui/progress";

const mockupData = {
  challengeTitle: "텀블러에 음료 담기",
  currentDay: 8,
  totalDay: 10,
};

export default function ChallengeCard() {
  const { challengeTitle, currentDay, totalDay } = mockupData;

  return (
    <div className="w-[280px] h-[111px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center items-center rounded-lg">
      <div className="flex justify-between gap-3 w-full h-[60px]">
        <Image src={coffee} alt="커피컵" width={60} height={60} className="bg-green-400 rounded-lg" />
        <div className="flex flex-col justify-center gap-[10px]">
          <h5 className="text-[#254434] font-extrabold text-sm whitespace-nowrap">{challengeTitle}</h5>
          <div className="flex gap-1">
            <p className="text-[#254434] text-xs">{currentDay}</p>
            <p className="text-[#254434] text-opacity-50 text-xs">/ {totalDay}일 진행 중!</p>
          </div>
        </div>
        <Image src={arrowRight} alt="오른쪽화살표" width={20} height={20} className="cursor-pointer ml-5" />
      </div>
      <Progress value={currentDay * 10} character={false} />
    </div>
  );
}
