import Image from "next/image";

// 추후에 카페 등록 API 수정되면 등록했을 때 cafeName, characterType 쿼리에 저장해두고 쓰기
export default function OwnerStampBook() {
  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">충무로 더블톤</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            key={index}
            src={"/img/character/yellow-face-gray.svg"}
            alt="stamp"
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
