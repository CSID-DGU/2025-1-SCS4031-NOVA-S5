import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AddCafeCardProps {
  status: "none" | "pending";
}

export function AddCafeCard({ status }: AddCafeCardProps) {
  return (
    <div className="relative bg-green-400 w-full h-[175px] rounded-xl">
      <div className="absolute right-0">
        <Image src="/img/fadedCharacter/yellow.svg" width={45} height={62} alt="yellow" />
        <Image src="/img/fadedCharacter/orange.svg" width={45} height={62} alt="orange" />
      </div>
      <div className="absolute left-0 bottom-0">
        <Image src="/img/fadedCharacter/green.svg" width={45} height={62} alt="green" />
        <Image src="/img/fadedCharacter/beige.svg" width={45} height={62} alt="beige" />
      </div>

      {status === "none" && (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-2 text-center mb-4">
            <h1 className="font-bold text-[16px]">아직 등록된 매장이 없어요.</h1>
            <p className="text-disabledfont text-[12px]">매장 등록 후 이용해 주세요!</p>
          </div>
          <Button className="bg-font-green text-[12px] font-bold rounded-full">
            매장 등록하러 가기
          </Button>
        </div>
      )}

      {status === "pending" && (
        <div className="flex flex-col justify-center items-center h-full">
          <Image src="/icon/evaluation.svg" alt="evaluation" width={35} height={35} />
          <div className="flex flex-col gap-2 text-center mt-4">
            <h1 className="font-bold text-[16px]">신청해주신 매장 등록 건이 심사중이에요!</h1>
            <p className="text-disabledfont text-[12px]">조금만 기다려주세요.</p>
          </div>
        </div>
      )}
    </div>
  );
}
