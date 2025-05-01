import { useStampBookStore } from "@/shared/store/stampBookStore";
import Image from "next/image";

interface RewardCouponProps {
  characterType: "yellow" | "orange" | "beige" | "green";
  id: number;
}

const bgColorMap: Record<RewardCouponProps["characterType"], string> = {
  yellow: "#fff3d4",
  orange: "#ffddb9",
  green: "#e2ecdc",
  beige: "#efe8dc",
};

export default function RewardCoupon({ characterType, id }: RewardCouponProps) {
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === id));

  if (!book) return null;

  return (
    <div
      className="w-[320px] h-[154px] px-[38px] py-[28px] flex flex-col items-center justify-center gap-[20px] rounded-[10px] shadow-sm"
      style={{ backgroundColor: bgColorMap[characterType] }}>
      <Image
        src={`/img/character/${characterType}-face.svg`}
        alt="character"
        width={65}
        height={65}
        className="cursor-pointer"
      />
      <p className="text-sm font-bold text-font-black">
        저를 클릭해서 {book.rewardItem}로 교환해주세요!
      </p>
    </div>
  );
}
