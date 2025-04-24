import Image from "next/image";

export default function LoginHeader() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <Image src="icon/ecok-logo.svg" alt="logo" width={112} height={28} />
      <p className="text-md font-medium text-[#2a2a2a]">
        다양한 카페의 적립 내역을 모바일에서 한 눈에!
      </p>
    </div>
  );
}
