"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TemplateFooter() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[15px] items-center justify-center">
      <p className="text-xs text-[#8E8E93] font-medium">마음에 드시나요? 👀</p>
      <Button
        className="w-[180px] h-[41px] rounded-full bg-font-green text-xs text-[#fafafa] font-bold text-center"
        onClick={() => router.push("/owner/stampbook/info")}>
        스탬프북 상세 정보 입력하기
      </Button>
    </div>
  );
}
