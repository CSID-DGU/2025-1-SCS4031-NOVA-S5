interface SearchProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "방문할 카페를 검색해 보세요!" }: SearchProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-[44px] pr-[18px] py-[6px] bg-green-400 rounded-full outline-none text-sm text-font-green"
      />
      <img
        src="/icon/search.svg"
        alt="검색 아이콘"
        className="w-[15px] h-[15px] absolute top-[9px] left-[18px]"
      />
    </div>
  );
}
