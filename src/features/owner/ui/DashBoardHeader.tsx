"use client";

import Image from "next/image";

interface DashBoardHeaderProps {
  title: string;
  name?: string;
  onNameClick?: () => void;
}

export function DashBoardHeader({ title, name, onNameClick }: DashBoardHeaderProps) {
  const isNameProvided = !!name?.trim();
  return (
    <header className="flex items-center justify-between border-b border-[#E2ECDC] h-[52px]">
      <h1 className="text-font-green text-[20px] font-extrabold">{title}</h1>
      <div className="flex gap-1 cursor-pointer" onClick={onNameClick}>
        <p className={`text-[12px] ${name ? "text-fontgray" : "text-[#C4C4C4]"}`}>
          {isNameProvided ? name : "카페를 선택해주세요"}
        </p>
        <Image src="/icon/arrow-down.svg" alt="arrow" width={17} height={17} />
      </div>
    </header>
  );
}
