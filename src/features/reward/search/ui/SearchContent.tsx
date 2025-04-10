import SearchBar from "@/shared/ui/input/SearchBar";

export default function SearchContent() {
  return (
    <div className="w-full flex gap-[10px] items-center">
      <img src="/icon/arrow-left.svg" alt="왼쪽 화삺표" className="w-[30px] h-[30px]" />
      <SearchBar />
    </div>
  );
}
