import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import Image from "next/image";
import characterIcon from "../../../public/img/yellow-face.svg";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  character?: boolean;
}

function Progress({ className, value = 0, character = false, ...props }: ProgressProps) {
  return (
    <div className="relative w-full h-[24px]">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("bg-green-400 relative h-1 w-full overflow-hidden rounded-full", className)}
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
          className="absolute -top-3 transition-all"
          style={{
            left: `calc(${value}% - 20px)`,
          }}>
          <Image src={characterIcon} alt="face" width={23} height={23} />
        </div>
      )}
    </div>
  );
}

export { Progress };
