import { CafeInfoProps } from "../model";

function CafeInfo({ name, hours, lastOrder, phone, address }: CafeInfoProps) {
  return (
    <div className="flex flex-col gap-y-[10px] bg-[#FFFDF7] w-full rounded-[10px] h-[141px] px-[17px] py-[18px]">
      <h2 className="text-[14px] font-[700] text-font-green">{name}</h2>
      <div className="flex flex-col gap-y-[10px] text-[12px] text-green-800 ">
        <div className="flex flex-row gap-1">
          <img src="/img/clock.svg" alt="clock" />
          <p>
            영업시간 | {hours ? hours : "오늘 휴무"} (Last Order{" "}
            {lastOrder ? lastOrder : "오늘 휴무"})
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <img src="/img/calling.svg" alt="calling" />
          <p>전화번호 | {phone}</p>
        </div>
        <div className="flex flex-row gap-1">
          <img src="/img/address.svg" alt="address" />
          <p>주소 | {address}</p>
        </div>
      </div>
    </div>
  );
}

export default CafeInfo;
