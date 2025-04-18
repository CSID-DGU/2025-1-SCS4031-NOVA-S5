function LocationContent() {
  return (
    <div>
      <p className="text-[20px] font-[800] pb-[30px]">위치 설정</p>
      <button className="flex gap-2 items-center justify-center bg-[#E2ECDC] w-full py-[13px] rounded-[10px] hover:bg-[#c6d3bf]">
        <img src="./icon/bottomsheet/location.svg" alt="current location" />
        <p className="text-font-green text-[15px] font-[700]">현재 위치로 설정</p>
      </button>
      <button className="flex gap-2 items-center justify-center bg-[#254434] w-full py-[13px] rounded-[10px] hover:bg-[#345e48] mt-3">
        <img src="./icon/bottomsheet/search-location.svg" alt="search location" />
        <p className="text-white font-[700] text-[15px]">위치 추가하기</p>
      </button>
    </div>
  );
}

export default LocationContent;
