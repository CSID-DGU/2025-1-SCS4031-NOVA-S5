import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CharacterType = "yellow" | "orange";

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  character?: boolean;
  characterType?: CharacterType;
}

const characterImageMap: Record<CharacterType, string> = {
  yellow: "/img/character/yellow-face.svg",
  orange: "/img/character/orange-face.svg",
};
function Progress({
  className,
  value = 0,
  character = false,
  characterType = "yellow",
  ...props
}: ProgressProps) {
  const characterIcon = characterImageMap[characterType];
  return (
    <div className="relative w-full h-[24px]">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("bg-[#B5CDB7] relative h-1 w-full overflow-hidden rounded-full", className)}
        {...props}>
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-green-100 h-full flex items-center transition-all"
          style={{
            transform: `translateX(-${100 - value}%)`,
          }}></ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
      {character && (
        <div
          className="absolute -top-[10px] transition-all"
          style={{
            left: `calc(${value}% - 15px)`,
          }}>
          <Image src={characterIcon} alt="face" width={23} height={23} />
        </div>
      )}
    </div>
  );
}

export { Progress };
