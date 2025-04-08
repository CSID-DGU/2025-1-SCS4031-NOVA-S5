'use client'

function FortuneCard() {
  return (
    <div className="flex items-center gap-2 bg-[#E2ECDC] w-[330px] h-[65px] rounded-[10px]">
      <img src="./fortuneCharacter.svg" alt="fortune-character" className="p-2" />
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-[700] text-[#254434]">비니가 알려주는 오늘의 환경 운세</p>
        <p className="text-[10px] text-green-800">자연이 당신을 지켜보고 있습니다! 오늘은 대중교통을 이용해보세요.</p>
      </div>
    </div>
  )
}
export default FortuneCard;

