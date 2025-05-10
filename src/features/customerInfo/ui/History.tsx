import Image from "next/image";

export function History() {
  const mockData = [
    {
      date: "2025.04.28",
      type: "스탬프",
      count: "2",
    },
  ];

  if (mockData.length === 0) {
    return (
      <div className="w-full py-6">
        <h1 className="text-font-green text-lg font-extrabold">최근 적립 내역</h1>
        <div className="relative flex items-center justify-center mt-4  bg-green-400 h-[96px] rounded-md w-full overflow-hidden">
          <div className="absolute right-0">
            <Image src="/img/fadedCharacter/yellow.svg" width={36} height={50} alt="yellow" />
            <Image src="/img/fadedCharacter/orange.svg" width={36} height={50} alt="orange" />
          </div>
          <div className="absolute left-0 bottom-0">
            <Image src="/img/fadedCharacter/green.svg" width={35} height={34} alt="green" />
            <Image src="/img/fadedCharacter/beige.svg" width={35} height={34} alt="beige" />
          </div>
          <p className="text-body-small font-bold">최근 적립 내역이 없어요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6">
      <h1 className="text-font-green text-lg font-extrabold">최근 적립 내역</h1>
      <div className="relative flex flex-col justify-center mt-4 bg-yellow-300 h-[96px] w-full p-4 overflow-hidden rounded-md">
        {mockData.map((record, index) => (
          <p
            key={index}
            className="text-body-small font-bold">{`· ${record.date} | ${record.type} ${record.count}개`}</p>
        ))}
        <div className="absolute right-0 bottom-0 flex gap-1 pr-2">
          <Image src="/img/fadedCharacter/yellow.svg" width={36} height={50} alt="yellow" />
          <Image src="/img/fadedCharacter/orange.svg" width={36} height={50} alt="orange" />
        </div>
      </div>
    </div>
  );
}
