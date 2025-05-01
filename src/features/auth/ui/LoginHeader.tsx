import Image from "next/image";

interface LoginHeaderProps {
  isCustomer: boolean;
}

export default function LoginHeader({ isCustomer = true }: LoginHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <Image src="icon/ecok-logo.svg" alt="logo" width={112} height={28} />
      {isCustomer ? (
        <p className="text-md font-medium text-[#2a2a2a]">
          다양한 카페의 적립 내역을 모바일에서 한 눈에!
        </p>
      ) : (
        <p className="text-md font-medium text-[#2a2a2a]">
          우리 카페의 브랜딩을 반영할 수 있는
          <br />
          신개념 모바일 적립 솔루션
        </p>
      )}
    </div>
  );
}
