export const fortuneMockupList = {
  id: 1,
  message: "자연이 당신을 지켜보고 있습니다! 오늘은 대중교통을 이용해보세요.",
};

export default function FortuneCard() {
  return (
    <div className="w-[331px] h-[65px] flex gap-3 items-center justify-center py-[14px] px-[9px] bg-[#EEF3E5] rounded-lg">
      <img src="/img/character/green-all.svg" alt="캐릭터 이미지" className="w-[35px] h-[33px]" />
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-sm font-bold text-[#254434]">비니가 알려주는 오늘의 환경 운세</p>
        <p className="text-[10px] font-[500] text-[#254434B2]">{fortuneMockupList.message}</p>
      </div>
    </div>
  );
}
