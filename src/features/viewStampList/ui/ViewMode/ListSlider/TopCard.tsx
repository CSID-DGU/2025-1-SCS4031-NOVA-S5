interface Cafe {
  id: number;
  name: string;
  imageUrl: string;
  keywords: string;
}

function TopCard({ cafe }: { cafe: Cafe }) {
  return (
    <div className="w-[133px] h-[177px] bg-white rounded-tr-2xl rounded-br-2xl shadow-md overflow-hidden">
      <img src={cafe.imageUrl} alt={cafe.name} className="w-full h-[115px] object-cover" />
      <div className=" pl-4">
        <img src="./img/diary.svg" alt="diary" className="relative ml-20" />
        <p className="text-[12px] font-[700] text-[#254434] truncate">{cafe.name}</p>
        <p className="text-[10px] text-gray-200">{cafe.keywords}</p>
      </div>
    </div>
  );
}

export default TopCard;
