import { Input } from "@/components/ui/input";


function SearchBar() {
  return (
    <div>
      <Input 
        placeholder="검색"
        className="w-[310px] h-[35px] rounded-full"
      />
    </div>
  );
}

export default SearchBar;
