import { useParams, useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import Image from "next/image";

export default function CafeDetailHeader() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.cafeId === id));

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] bg-yellow-100 w-full max-w-[430px] mx-auto px-[27px] py-[27px] flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="text-xl text-font-green font-extrabold">나의 스탬프북</p>
        <p className="text-md text-[#25443480] font-bold">{book?.cafeName}</p>
      </div>
      <Image
        src={"/icon/x-icon.svg"}
        alt="닫기"
        width={25}
        height={25}
        className="cursor-pointer"
        onClick={() => router.back()}
      />
    </header>
  );
}
