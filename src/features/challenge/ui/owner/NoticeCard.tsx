import Image from "next/image";

export function NoticeCard() {
  return (
    <div className="flex flex-col">
      <label className="text-base font-extrabold text-font-green mb-8">안내드려요!</label>
      <div className="relative flex flex-col  gap-4 items-center justify-center bg-green-400 w-full h-[110px] overflow-hidden rounded-2xl">
        <div className="absolute right-0">
          <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
          <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
          <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
        </div>
        <label className="text-sm font-bold">챌린지는 수정 및 삭제가 불가능해요.</label>
        <p className="text-xs text-[#8E8E93]">
          불가피한 사정으로 수정 또는 삭제가 필요한 경우,
          <br />
          hyoeun1117@naver.com
        </p>
      </div>
    </div>
  );
}
