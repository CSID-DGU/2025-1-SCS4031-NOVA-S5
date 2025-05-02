"use client";

import LoginContent from "@/features/auth/ui/LoginContent";
import LoginHeader from "@/features/auth/ui/LoginHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[70px] px-[35px] py-[50px]">
      <LoginHeader isCustomer={false} />
      <LoginContent />
    </div>
  );
}
