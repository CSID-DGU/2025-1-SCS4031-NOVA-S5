import Image from "next/image";

interface ChallengeStatusProps {
  stoppedCount: number; // 참여중단 수
  inProgressCount: number; // 참여중 수
  rewardedCount: number; // 리워드 수령 수
}

export function ChallengeStatus({
  stoppedCount,
  inProgressCount,
  rewardedCount,
}: ChallengeStatusProps) {
  return (
    <div className="flex flex-col">
      <label className="text-base font-extrabold text-font-green pb-6">참여 고객 현황</label>
      <div className="flex flex-row w-full items-end justify-between bg-green-400 h-[140px] px-6 pb-3 rounded-2xl">
        <div className="flex flex-col gap-2 text-center relative">
          <div className="relative w-[30px] h-[30px] mx-auto">
            <Image src="/icon/speech/green-bubble.svg" alt="bubble" fill />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
              {stoppedCount}명
            </span>
          </div>
          <Image src="/img/character/green-all.svg" alt="green" width={40} height={70} />
          <label className="text-xs text-font-green font-bold">참여 중단</label>
        </div>

        <Image src="/icon/speech/white-line.svg" alt="line" width={2} height={104} />

        <div className="flex flex-col gap-2 text-center relative">
          <div className="relative w-[30px] h-[30px] mx-auto">
            <Image src="/icon/speech/yellow-bubble.svg" alt="bubble" fill />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#FB9B28]">
              {inProgressCount}명
            </span>
          </div>
          <Image src="/img/character/yellow-all.svg" alt="yellow" width={40} height={70} />
          <label className="text-xs text-font-green font-bold">참여중</label>
        </div>

        <Image src="/icon/speech/white-line.svg" alt="line" width={2} height={104} />

        <div className="flex flex-col gap-2 text-center relative">
          <div className="relative w-[30px] h-[30px] mx-auto">
            <Image src="/icon/speech/orange-bubble.svg" alt="bubble" fill />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#DA8823]">
              {rewardedCount}명
            </span>
          </div>
          <Image src="/img/character/orange-all.svg" alt="orange" width={40} height={70} />
          <label className="text-xs text-font-green font-bold">리워드 수령</label>
        </div>
      </div>
    </div>
  );
}
