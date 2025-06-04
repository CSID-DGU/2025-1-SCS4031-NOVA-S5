import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[50] w-full max-w-[430px] mx-auto bg-[#FBFBEE] max-w-[375px] pt-[13px]">
      <div className="px-2 h-full flex items-center">
        <div className="flex items-center pl-4">
          <Image
            src="/icon/ecok-logo.svg"
            alt="로고"
            width={80}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
