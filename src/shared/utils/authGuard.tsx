import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuthGuard(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return; // 아직 세션 로딩 중이면 기다림
      if (!session) {
        router.replace("/"); // 로그인 안 되어있으면 로그인 페이지로
      }
    }, [session, status, router]);

    if (status === "loading" || !session) {
      return null; // 로딩 중 or 인증 안 됐으면 아무것도 안 보여줌
    }

    return <Component {...props} />;
  };
}

export function withOutAuthGuard(Component: React.ComponentType) {
  return function WithoutAuthenticatedComponent(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;
      if (session) {
        router.replace("/main"); // 로그인 되어있으면 메인으로 강제 이동
      }
    }, [session, status, router]);

    if (status === "loading") {
      return null; // 로딩 중이면 아무것도 안 보여줌
    }

    return <Component {...props} />;
  };
}
