import Image from "next/image";

export default function LoginContent() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[130px]">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative flex items-center justify-center w-[123px] h-[123px] bg-green-400 rounded-t-[38px] rounded-bl-[38px]">
          <Image src="/img/character/green-all.svg" alt="character" width={70} height={70} />
          <Image
            src="/img/one-spring.svg"
            alt="spring"
            width={76}
            height={24}
            className="absolute -top-[12px] left-[24px]"
          />
        </div>
        <div className="relative flex items-center justify-center w-[123px] h-[123px] bg-green-400 rounded-t-[38px] rounded-br-[38px]">
          <Image src="/img/character/orange-all.svg" alt="character" width={70} height={70} />
          <Image
            src="/img/one-spring.svg"
            alt="spring"
            width={76}
            height={24}
            className="absolute -top-[12px] left-[24px]"
          />
        </div>
        <div className="flex items-center justify-center w-[123px] h-[123px] bg-green-400 rounded-b-[38px] rounded-tl-[38px]">
          <Image src="/img/character/yellow-all.svg" alt="character" width={70} height={70} />
        </div>
        <div className="flex items-center justify-center w-[123px] h-[123px] bg-green-400 rounded-b-[38px] rounded-tr-[38px]">
          <Image src="/img/character/beige-all.svg" alt="character" width={70} height={70} />
        </div>
      </div>
      <button className="w-full bg-[#FFE812] rounded-full px-[35px] py-[15px] text-md font-semibold text-font-black flex items-center justify-center gap-3">
        <Image src="/icon/kakao-logo.svg" alt="kakao-logo" width={23} height={23} />
        카카오톡으로 3초 만에 시작하기
      </button>
    </div>
  );
}
