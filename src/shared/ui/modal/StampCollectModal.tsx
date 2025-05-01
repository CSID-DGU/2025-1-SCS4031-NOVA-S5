import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface StampCollectModalProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  characterType: "yellow" | "orange" | "beige" | "green";
}

const characterNameMap: Record<"yellow" | "green" | "orange" | "beige", string> = {
  yellow: "팡",
  green: "꼭",
  orange: "쿡",
  beige: "콕",
};

export default function StampCollectModal({
  isOpen,
  setIsOpen,
  characterType,
}: StampCollectModalProps) {
  const characterName = characterNameMap[characterType];

  return (
    <Dialog open={true} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] h-[270px] rounded-[15px] p-0 gap-0 bg-yellow-300 flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 모달</DialogTitle>
        </DialogHeader>
        <div className="w-[238px] flex flex-col gap-[30px] items-center justify-center py-[30px]">
          <Image
            src={`/img/character/${characterType}-face.svg`}
            alt="character"
            width={90}
            height={101}
          />
          <p className="text-md font-bold text-font-green text-center">
            {characterName}!
            <br />
            스탬프 적립이 완료되었어요.
          </p>
        </div>
        <DialogClose asChild>
          <button className="w-full h-[44px] border-t-[1px] border-t-[#8E8E9380] text-md text-font-green font-semibold flex items-center justify-center">
            확인
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
