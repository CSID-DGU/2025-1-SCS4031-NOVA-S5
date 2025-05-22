"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface StartChallengeProps {
  title: string;
  description?: string;
  label: string;
}

export function StartChallenge({ title, description, label }: StartChallengeProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/challenge/create");
  };
  return (
    <div className="relative bg-green-400 w-full h-[233px] rounded-xl pt-3">
      <div className="absolute right-0">
        <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
        <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
        <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
      </div>
      <div className="flex flex-col items-center justify-center gap-7">
        <Image src="/img/character/yellow-all.svg" alt="yellow" width={60} height={67} />
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold text-[16px]">{title}</h1>
          <p className="text-xs text-gray-400">{description}</p>
          <Button
            className="bg-font-green text-[12px] font-bold rounded-full"
            onClick={handleClick}>
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
}
