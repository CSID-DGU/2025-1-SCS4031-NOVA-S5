import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useStampBookStore } from "@/shared/store/stampBookStore";

interface StampCardProps {
  stampBookId: number;
}

export default function StampCard({ stampBookId }: StampCardProps) {
  const book = useStampBookStore(state => state.stampBooks.find(b => b.cafeId === stampBookId));

  if (!book) return null;

  const { cafeName, rewardItem, currentStampCount, remainingStampCount } = book;

  return (
    <div className="relative w-[280px] h-[149px] bg-yellow-300 p-4 flex flex-col gap-4 justify-center rounded-lg overflow-hidden">
      <Image
        src={"/img/character/yellow-ear.svg"}
        alt="토끼 캐릭터"
        width={37}
        height={51}
        style={{ width: 37, height: 51 }}
        className="absolute right-[-10px] top-[2px] rotate-[-24deg] opacity-20"
      />
      <Image
        src={"/img/character/orange-ear.svg"}
        alt="여우 캐릭터"
        width={37}
        height={47}
        style={{ width: 37, height: 47 }}
        className="absolute right-[-15px] top-[50px] rotate-[-54deg] opacity-20"
      />
      <div className="flex gap-[6px]">
        <Image src={"/icon/coffee.svg"} alt="원두" width={16} height={20} />
        <p className="text-[#254434] text-sm font-bold">{cafeName}</p>
      </div>
      <div className="flex flex-col gap-[7px] mt-4">
        <div className="flex">
          <p className="text-[#254434] font-semibold text-xs">{rewardItem}</p>
          <p className="text-[#121212] font-semibold text-xs">까지</p>
        </div>
        <div className="flex gap-[2px]">
          <p className="text-[#254434] font-bold text-sm">스탬프 {remainingStampCount}개</p>
          <p className="text-[#121212] font-bold text-sm">남았어요!</p>
        </div>
      </div>
      <Progress value={currentStampCount * 10} character={true} characterType="yellow" />
    </div>
  );
}
