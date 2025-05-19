import Image from "next/image";

export default function CustomStampFront() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-[50px] h-[33px] py-1 bg-green-300 rounded-[10px] text-md font-bold text-font-green text-center">
        앞면
      </div>
      <div className="w-full h-[154px] py-5 px-[18px] bg-yellow-100 rounded-[10px] shadow-md">
        <div className="pt-[33px] px-3 grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
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
    </div>
  );
}
