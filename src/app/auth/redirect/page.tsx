"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import api from "@/shared/api/axios";
import Loading from "@/shared/ui/Loading";
import { useRoleStore } from "@/shared/store/roleStore";

function KakaoCallbackInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const { role } = useRoleStore();

  const loginMutation = useMutation({
    mutationFn: (code: string) =>
      api.post("/auth/login", {
        code,
        socialType: "KAKAO",
        role,
      }),
    onSuccess: res => {
      const { accessToken, refreshToken } = res.data.data;

      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
      setCookie("role", role);

      if (role === "OWNER") {
        router.push("/owner/main");
      } else if (role === "STAFF") {
        router.push("/staff/main");
      } else {
        router.push("/main");
      }
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

  return <Loading />;
}

export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoCallbackInner />
    </Suspense>
  );
}
