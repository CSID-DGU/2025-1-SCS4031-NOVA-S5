"use client";

import { useEffect } from "react";
import { useRoleStore } from "@/shared/store/roleStore";
import Image from "next/image";

interface LoginHeaderProps {
  isCustomer?: boolean;
}

export default function LoginHeader({ isCustomer = true }: LoginHeaderProps) {
  const { role, setRole } = useRoleStore();

  useEffect(() => {
    if (!isCustomer && role === "USER") {
      setRole("OWNER");
    }
  }, [isCustomer, role, setRole]);

  console.log(role);

  const translateX = role === "OWNER" ? "translateX(0%)" : "translateX(100%)";

  return (
    <div className="w-full flex flex-col gap-[30px]">
      <Image src="/icon/ecok-logo.svg" alt="logo" width={112} height={28} />
      {isCustomer ? (
        <p className="text-md font-medium text-[#2a2a2a]">
          다양한 카페의 적립 내역을 모바일에서 한 눈에!
        </p>
      ) : (
        <div className="w-full flex flex-col gap-[40px]">
          <p className="text-md font-medium text-[#2a2a2a]">
            우리 카페의 브랜딩을 반영할 수 있는
            <br />
            신개념 모바일 적립 솔루션
          </p>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-full flex justify-center items-center">
              <p
                className={`w-1/2 text-sm font-medium text-center cursor-pointer ${
                  role === "OWNER" ? "text-font-green" : "text-[#2544344D]"
                }`}
                onClick={() => setRole("OWNER")}>
                사장님
              </p>
              <p
                className={`w-1/2 text-sm font-medium text-center cursor-pointer ${
                  role === "STAFF" ? "text-font-green" : "text-[#2544344D]"
                }`}
                onClick={() => setRole("STAFF")}>
                직원
              </p>
            </div>

            <div className="relative w-full h-[3px] bg-green-300 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-1/2 h-full bg-[#2544344D] transition-transform duration-500 ease-in-out"
                style={{ transform: translateX }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
