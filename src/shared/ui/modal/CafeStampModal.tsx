import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import StampModalContent from "./CafeStampModalContent";
import { useStampModalStore } from "../../store/stampModalStore";

interface StampModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  characterType: "YELLOW" | "ORANGE" | "BEIGE" | "GREEN";
  onDeleteConfirm?: () => void;
}

export default function StampModal({
  isOpen,
  setIsOpen,
  characterType,
  onDeleteConfirm,
}: StampModalProps) {
  const { stampModalType } = useStampModalStore();
  const type = characterType.toLowerCase();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showClose={false}
        className="w-[300px] h-[300px] rounded-[15px] p-0 gap-0 bg-yellow-300 flex flex-col items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="sr-only">스탬프북 모달</DialogTitle>
        </DialogHeader>
        <div className="w-[238px] h-[250px] flex flex-col gap-[30px] items-center justify-center py-[35px]">
          <Image src={`/img/character/${type}-all.svg`} alt="character" width={90} height={101} />
          <StampModalContent type={stampModalType} />
        </div>
        {stampModalType === "delete-confirm" ? (
          <div className="w-full flex h-[50px] border-t-[1px] border-t-[#8E8E9380]">
            <button
              className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center border-r-[1px] border-r-[#8E8E9380]"
              onClick={() => setIsOpen(false)}>
              아니요
            </button>
            <button
              className="w-1/2 h-full text-md text-font-green font-semibold flex items-center justify-center"
              onClick={onDeleteConfirm}>
              네
            </button>
          </div>
        ) : (
          <DialogClose asChild>
            <button className="w-full h-[50px] border-t-[1px] border-t-[#8E8E9380] text-md text-font-green font-semibold flex items-center justify-center">
              확인
            </button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
