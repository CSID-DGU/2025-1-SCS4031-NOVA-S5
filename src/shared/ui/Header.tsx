import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative h-[50px] bg-[#FBFBEE] max-w-[375px] mx-auto pt-[44px]">
      <div className="px-2 h-full flex items-center">
        <div className="flex items-center pl-4">
          <Image 
            src="./icon/ecok-logo.svg" 
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