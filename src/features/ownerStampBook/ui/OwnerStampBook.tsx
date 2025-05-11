import Image from "next/image";
import { useStampEditStore } from "@/shared/store/stampEditStore";

// 추후에 현재 선택된 카페 조회 API 연결되면 cafeName, characterType 쿼리에 저장해두고 쓰기
export default function OwnerStampBook() {
  const { frontName } = useStampEditStore();
  const totalStamps = 10;
  const stampedCount = 3;

  // const queryClient = useQueryClient();

  // const registeredCafe = queryClient.getQueryData<{ characterType: string }>(["registeredCafe"]);
  // const type = registeredCafe?.characterType ?? "YELLOW";
  // const lowerType = type === "BLACK" ? "beige" : type.toLowerCase();

  // useEffect(() => {
  //   const registered = queryClient.getQueryData<{ cafeName: string }>(["registeredCafe"]);
  //   if (registered?.cafeName) {
  //     setFrontName(registered.cafeName);
  //     setBackName(registered.cafeName);
  //   }
  // }, [setFrontName, setBackName, queryClient]);

  return (
    <div className="w-[320px] h-[154px] flex flex-col gap-4 py-5 px-4 bg-yellow-300 rounded-lg shadow-sm">
      <div className="flex gap-[6px] items-center">
        <Image src="/icon/coffee.svg" alt="원두" width={16} height={16} />
        <p className="text-sm font-bold text-[#254434]">{frontName}</p>
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-3 place-items-center">
        {Array.from({ length: totalStamps }).map((_, index) => (
          <Image
            key={index}
            src={
              index < stampedCount
                ? "/img/character/yellow-face.svg"
                : "/img/character/yellow-face-gray.svg"
            }
            alt="stamp"
            width={35}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}
