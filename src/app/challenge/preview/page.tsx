"use client";

import { Preview } from "@/features/challengePreview/ui";
import { CloseHeader } from "@/shared";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="p-7 h-screen flex flex-col">
      <CloseHeader title="챌린지 예시" onClick={handleBack} />
      <div className="overflow-auto flex-1 scrollbar-hide">
        <Preview />
      </div>
    </div>
  );
}
