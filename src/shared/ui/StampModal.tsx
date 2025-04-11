import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";

interface StampModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  characterType: "yellow" | "orange" | "beige" | "green";
  isConfirm?: boolean;
}

export default function StampModal({
  isOpen,
  setIsOpen,
  characterType,
  isConfirm = false,
}: StampModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] h-[300px] rounded-[15px] p-0 gap-0 bg-yellow-300 flex flex-col items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 홈 등록 완료</DialogTitle>
        </DialogHeader>
        <div className="w-[238px] h-[250px] flex flex-col gap-[30px] items-center justify-center py-[35px]">
          <Image
            src={`/img/character/${characterType}-all.svg`}
            alt="character"
            width={90}
            height={101}
          />
          <p className="text-md text-font-green font-bold text-center">
            이제 홈에서
            <br />
            스탬프북을 바로 확인하실 수 있어요!
          </p>
        </div>
        <DialogClose asChild>
          {isConfirm ? (
            <div className="w-full flex h-[50px] border-t-[1px] border-t-[#8E8E9380]">
              <button className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center border-r-[1px] border-r-[#8E8E9380]">
                아니요
              </button>
              <button className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center">
                네
              </button>
            </div>
          ) : (
            <button className="w-full h-[50px] border-t-[1px] border-t-[#8E8E9380] text-md text-font-green font-semibold flex items-center justify-center">
              확인
            </button>
          )}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
