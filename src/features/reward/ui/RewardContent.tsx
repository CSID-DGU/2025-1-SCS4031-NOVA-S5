import StampBookList from "./StampBookList";

export default function RewardContent() {
  return (
    <div className="relative w-full bg-yellow-100 flex flex-col gap-[30px] px-6 pb-6">
      <div className="flex justify-between items-center">
        <img src="/img/one-spring.svg" alt="스프링" className="absolute -top-[10px] w-[76px] h-[24px]" />
        <img src="/img/one-spring.svg" alt="스프링" className="absolute -top-[10px] right-6 w-[76px] h-[24px]" />
      </div>
      <div className="h-[15px] mt-[10px] flex justify-end gap-[10px] items-center">
        <div className="flex gap-[7px] items-center justify-center cursor-pointer">
          <img src="icon/dot.svg" alt="점" className="w-[4px] h-[4px]" />
          <p className="text-xs text-green-100">최신순</p>
        </div>
        <div className="flex gap-[7px] items-center justify-center cursor-pointer">
          <img src="icon/dot.svg" alt="점" className="w-[4px] h-[4px]" />
          <p className="text-xs text-green-100">리워드 많은 순</p>
        </div>
      </div>
      <StampBookList />
    </div>
  );
}
