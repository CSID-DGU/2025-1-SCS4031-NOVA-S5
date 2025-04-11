import { useParams, useRouter } from "next/navigation";
import { useStampBookStore } from "@/shared/store/stampBookStore";
import Image from "next/image";

export default function CafeDetailHeader() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const book = useStampBookStore(state => state.stampBooks.find(b => b.id === id));

  return (
    <header className="w-full flex justify-between items-center">
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
        onClick={() => router.push("/reward")}
      />
    </header>
  );
}
