export default function RewardHeader() {
  return (
    <header className="mobile-container h-[132px] pt-[72px] pb-[35px] pl-[153px] pr-[27px] flex justify-center bg-green-300">
      <div className="w-[195px] flex justify-between items-center">
        <p className="text-lg font-extrabold text-font-green">적립내역</p>
        <img src="/icon/search.svg" alt="검색 아이콘" className="w-[17px] h-[17px] cursor-pointer" />
      </div>
    </header>
  );
}
