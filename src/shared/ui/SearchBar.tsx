import { Input } from "@/components/ui/input";


function SearchBar() {
  return (
    <div className="flex flex-row items-center bg-green-4 rounded-full w-[310px] h-[35px]">
      <img src="/icon/search.svg" alt="search" className="w-[16px] h-[17px] ml-3"/>
      <Input 
        placeholder="방문할 카페를 검색해 보세요!"
        className="rounded-full border-none !focus:outline-none !focus:ring-0 !focus-visible:outline-none !focus-visible:ring-0 !focus-visible:border-input placeholder:text-green-font"
        style={{ outline: 'none', boxShadow: 'none' }}
      />
    </div>
  );
}

export default SearchBar;
