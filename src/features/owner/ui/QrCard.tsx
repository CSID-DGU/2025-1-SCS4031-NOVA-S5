"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function QrCard() {
  const route = useRouter();
  return (
    <div
      className="relative flex flex-col items-center bg-green-400 w-full h-[175px] rounded-xl cursor-pointer"
      onClick={() => route.push("/owner/qrscan")}>
      <div className="absolute right-0">
        <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
        <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
        <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
      </div>
      <h1 className="font-bold text-[16px] mt-8">고객님의 프로필 QR을 스캔해주세요!</h1>
      <div className="absolute flex flex-col justify-center items-center bottom-0">
        <Image
          src="/img/qr/qr-comment.svg"
          alt="qr comment"
          width={41}
          height={41}
          className="translate-y-8"
        />
        <Image src="/img/qr/green-qr.svg" alt="qr character" width={150} height={150} />
      </div>
    </div>
  );
}
