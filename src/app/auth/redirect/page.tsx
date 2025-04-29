"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "@/shared/api/axios";
import LoadingSpinner from "@/shared/ui/LoadingSpinner";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const loginMutation = useMutation({
    mutationFn: (code: string) =>
      api.post("/auth/login", {
        code,
        socialType: "KAKAO",
        role: "USER",
      }),
    onSuccess: res => {
      const { accessToken, refreshToken } = res.data.data;

      document.cookie = `accessToken=${accessToken}; path=/;`;
      document.cookie = `refreshToken=${refreshToken}; path=/;`;
      router.push("/main");
    },
    onError: err => {
      alert("로그인에 실패했습니다.");
      console.error(err);
    },
  });

  useEffect(() => {
    if (code) {
      loginMutation.mutate(code);
    }
  }, [code]);

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      <LoadingSpinner />
      <p>로그인 중입니다...</p>
    </div>
  );
}
