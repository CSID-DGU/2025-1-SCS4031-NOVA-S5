"use client";

import Image from "next/image";

interface DashBoardHeaderProps {
  title: string;
  name?: string;
  onNameClick?: () => void;
}

export function DashBoardHeader({ title, name, onNameClick }: DashBoardHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-[#E2ECDC] h-[52px]">
      <h1 className="text-font-green text-[20px] font-extrabold">{title}</h1>
      {name && (
        <div className="flex gap-1 cursor-pointer" onClick={onNameClick}>
          <p className="text-fontgray text-[12px]">{name}</p>
          <Image src="/icon/arrow-down.svg" alt="arrow" width={17} height={17} />
        </div>
      )}
    </header>
  );
}
