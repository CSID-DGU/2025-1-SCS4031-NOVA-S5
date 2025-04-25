"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "@/shared/api/axios";

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
      localStorage.setItem("accessToken", res.data.accessToken);
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

  return <div>로그인 중입니다...</div>;
}
