import { getChallengeType } from "@/shared";
import Image from "next/image";
import { DateRange } from "react-day-picker";

interface ChallengeInfoProps {
  cafeName: string;
  challengeType: string;
  reward: string;
  startDate: string;
  endDate: string;
}

export function ChallengeInfo({
  cafeName,
  challengeType,
  reward,
  startDate,
  endDate,
}: ChallengeInfoProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2">
        <img src="/icon/info.svg" alt="info" />
        <label className="text-font-green text-base font-extrabold">Challenge Information</label>
      </div>
      <div className="bg-yellow-300 px-5 py-4">
        <p className="text-sm text-font-green font-bold mb-5">
          {cafeName}에서 주최하는 챌린지에요.
        </p>
        <div className="flex flex-col gap-4 text-xs text-green-800">
          <div className="flex flex-row gap-1">
            <Image src="/icon/challenge/date.svg" alt="date" width={14} height={14} />
            <p>
              진행기간 | {startDate ? startDate : "시작일 미정"} ~{" "}
              {endDate ? endDate : "종료일 미정"}
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <Image src="/icon/challenge/join.svg" alt="join" width={14} height={14} />
            <p>참여 방법 | {getChallengeType(challengeType)}</p>
          </div>
          <div className="flex flex-row gap-1">
            <Image src="/icon/challenge/success.svg" alt="success" width={14} height={14} />
            <p>성공조건 | 10번</p>
          </div>
          <div className="flex flex-row gap-1">
            <Image src="/icon/challenge/reward.svg" alt="success" width={14} height={14} />
            <p>리워드 | {reward}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
