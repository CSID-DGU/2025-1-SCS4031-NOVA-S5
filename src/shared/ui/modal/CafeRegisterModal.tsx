import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RegisterModalProps {
  characterType?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function CafeRegisterModal({ isOpen, setIsOpen }: RegisterModalProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const registeredCafe = queryClient.getQueryData<{ characterType: string }>(["registeredCafe"]);
  const type = registeredCafe?.characterType ?? "YELLOW";
  const characterImageSrc = `/img/character/${type.toLowerCase()}-all.svg`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 bg-[#FFFDF7] w-[340px] h-[430px] gap-9">
        <DialogHeader className="h-[112px] bg-[#E2ECDC] flex justify-center items-center rounded-t-[10px]">
          <DialogTitle className="text-center !text-title-medium !font-[800] text-[#254434]">
            매장 등록 신청 완료
          </DialogTitle>
        </DialogHeader>
        <img src="/img/spring.svg" alt="spring" className="absolute top-[100px] left-[15px]" />
        <div className="flex flex-col gap-[30px] items-center">
          <Image src={characterImageSrc} width={90} height={101} alt="character" />
          <p className="text-md text-font-green font-bold text-center">
            신청해 주신 매장 등록 건은
            <br />
            최대 1-2일 내로 검토 후 등록돼요.
          </p>
        </div>
        <DialogClose asChild>
          <button
            className="w-full h-[45px] border-t-[1px] border-t-[#8E8E9380] text-md text-font-green text-center font-semibold"
            onClick={() => router.push("/owner/main")}>
            확인
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
