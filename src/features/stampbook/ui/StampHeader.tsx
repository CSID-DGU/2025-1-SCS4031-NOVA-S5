import SearchBar from "@/shared/ui/SearchBar";

function StampHeader() {
  return (
    <div className="flex flex-col w-[375px] justify-center items-center">
      <div className="flex flex-row justify-between px-[28px] pt-[33px] w-full mb-[25px]">
        <h1 className="text-green-font text-[20px] font-[800]">스탬프북</h1>
        <div className="flex flex-row items-center">
            <p className="text-green-font text-[12px] font-[600] text-custom-green">현재 위치</p>
            <img src="/icon/arrow-down.svg" alt="arrow-down" className="w-[17px] h-[17px]"/>        
        </div>        
      </div>

      <div className="flex justify-center items-center">
        <SearchBar /> 
      </div>
      



    </div>
  );
}

export default StampHeader;
