import Image from "next/image";

interface StampBookCardProps {
  cafeName: string; // 카페 이름
  maxStampCount: number; // 스탬프 최대 개수
  currentStampCount: number; // 적립된 스탬프 개수
  characterType: "YELLOW" | "GREEN" | "ORANGE" | "BLACK"; // 캐릭터 유형
}

export function CustomerStamp({
  cafeName,
  maxStampCount,
  currentStampCount,
  characterType,
}: StampBookCardProps) {
  const lowerCharacterType = characterType.toLowerCase(); // 캐릭터 유형을 소문자로 변환

  const stampedSrc = `/img/character/${lowerCharacterType}-face.svg`; // 스탬프 찍힌 이미지 경로
  const unstampedSrc = `/img/character/${lowerCharacterType}-face-gray.svg`; // 스탬프 안 찍힌 이미지 경로

  return (
    <div className="w-full h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{cafeName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {/* 스탬프 최대 개수만큼 반복하여 이미지 표시 */}
        {Array.from({ length: maxStampCount }).map((_, index) => (
          <img
            key={index}
            src={index < currentStampCount ? stampedSrc : unstampedSrc} // 스탬프 찍혔는지 여부에 따라 이미지 변경
            alt={index < currentStampCount ? "스탬프 찍힘" : "스탬프 안 찍힘"}
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
