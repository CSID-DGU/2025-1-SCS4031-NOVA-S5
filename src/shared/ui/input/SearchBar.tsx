import Image from "next/image";

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "방문할 카페를 검색해 보세요!",
  value,
  onChange,
}: SearchProps) {
  const handleClear = () => onChange?.("");

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className="w-full pl-[44px] pr-[18px] py-[6px] bg-green-400 rounded-full outline-none text-sm text-font-green"
      />
      <Image
        src={"/icon/search.svg"}
        alt="검색 아이콘"
        width={15}
        height={15}
        className="absolute top-[9px] left-[18px]"
      />
      {value ? (
        <Image
          src={"/icon/remove.svg"}
          alt="삭제"
          width={15}
          height={15}
          className="absolute top-[9px] right-[18px] cursor-pointer"
          onClick={handleClear}
        />
      ) : (
        ""
      )}
    </div>
  );
}
