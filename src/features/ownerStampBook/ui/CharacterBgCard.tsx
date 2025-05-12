import { ReactNode, MouseEventHandler } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CharacterBgCardProps {
  top?: ReactNode;
  bottom?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function CharacterBgCard({ top, bottom, onClick }: CharacterBgCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative w-full h-[175px] flex flex-col items-center justify-center gap-6 rounded-[10px] bg-green-400 overflow-hidden",
        onClick && "cursor-pointer"
      )}>
      {top}
      {bottom}

      <Image
        src={"/img/character/yellow-ear.svg"}
        alt="토끼 캐릭터"
        width={45}
        height={62}
        style={{ width: 45, height: 62 }}
        className="absolute right-[-10px] top-[2px] rotate-[-21deg] opacity-20"
      />
      <Image
        src={"/img/character/orange-ear.svg"}
        alt="여우 캐릭터"
        width={48}
        height={57}
        style={{ width: 48, height: 57 }}
        className="absolute right-[-15px] top-[60px] rotate-[-51deg] opacity-20"
      />
      <Image
        src={"/img/character/beige-ear.svg"}
        alt="양 캐릭터"
        width={57}
        height={45}
        style={{ width: 57, height: 45 }}
        className="absolute left-[-18px] bottom-0 rotate-[20deg] opacity-30"
      />
      <Image
        src={"/img/character/green-ear.svg"}
        alt="오리 캐릭터"
        width={54}
        height={52}
        style={{ width: 54, height: 52 }}
        className="absolute left-[-15px] bottom-[45px] rotate-[21deg] opacity-30"
      />
    </div>
  );
}
