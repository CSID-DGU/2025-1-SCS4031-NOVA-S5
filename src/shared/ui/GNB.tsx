"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function GNB() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "매거진", path: "/magazine", icon: "/icon/magazine.svg" },
    { name: "적립 내역", path: "/reward", icon: "/icon/reward-history.svg" },
    { name: "홈", path: "/main", icon: "/icon/home.svg" },
    { name: "스탬프북", path: "/stamplist", icon: "/icon/stamp-book.svg" },
    { name: "마이페이지", path: "/mypage", icon: "/icon/user.svg" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] w-full max-w-[430px] mx-auto bg-yellow-300 px-[27px] py-[18px] flex justify-between items-center shadow-[0px_-6px_14px_0px_rgba(47,47,47,0.04)]">
      {navItems.map(({ name, path, icon }) => {
        const isActive = pathname === path || pathname.startsWith(`${path}/`);
        const iconSrc = isActive ? icon.replace(".svg", "-active.svg") : icon;

        return (
          <div
            key={name}
            className="flex flex-col gap-1 items-center justify-center cursor-pointer"
            onClick={() => router.push(path)}>
            <Image
              src={iconSrc}
              alt={name}
              width={26}
              height={26}
              style={{ width: 26, height: 26 }}
            />
            <p
              className={`text-[10px] font-medium ${
                isActive ? "text-green-100" : "text-[#9C9CA1B2]"
              }`}>
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
