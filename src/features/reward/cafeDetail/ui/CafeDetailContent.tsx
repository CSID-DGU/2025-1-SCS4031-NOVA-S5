import { useParams } from "next/navigation";
import Image from "next/image";
import CharacterCard from "@/features/reward/cafeDetail/ui/CharacterCard";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import StampBook from "@/shared/ui/StampBook";

export default function CafeDetailContent() {
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === id));

  return (
    <section className="w-full flex flex-col gap-[40px]">
      <CharacterCard />
      <div className="flex flex-col gap-5">
        <p className="text-md text-font-green font-extrabold">
          으쌰으쌰, 리워드까지 {book?.remainingStamp}개 남았어요!
        </p>
        <div className="flex flex-col gap-5 items-center justify-center">
          <StampBook stampBookId={book?.id} characterType={book?.characterType} />
          <Image
            src={"/img/doubletone.svg"}
            alt="카페 이미지"
            width={320}
            height={154}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-full h-[41px] flex items-center justify-center gap-[30px]">
        <button className="w-1/2 h-full bg-font-green text-[#fff] text-xs font-bold rounded-full outline-none">
          홈에 등록
        </button>
        <button className="w-1/2 h-full bg-font-green text-[#fff] text-xs font-bold rounded-full outline-none">
          내 스탬프북에서 삭제
        </button>
      </div>
    </section>
  );
}
