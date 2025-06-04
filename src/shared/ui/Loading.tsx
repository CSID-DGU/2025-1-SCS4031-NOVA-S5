import LoadingSpinner from "./LoadingSpinner";

export default function Loading() {
  return (
    <div className="w-full min-h-real-screen flex flex-col gap-8 items-center justify-center">
      <LoadingSpinner />
      <p>로그인 중입니다...</p>
    </div>
  );
}
