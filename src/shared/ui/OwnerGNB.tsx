"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export function OwnerGNB() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "홈", path: "/owner", icon: "/icon/ownerGNB/home.svg" },
    { name: "스탬프북 디자인", path: "/owner/stampbook", icon: "/icon/ownerGNB/design.svg" },
    { name: "챌린지 관리", path: "/challenge", icon: "/icon/ownerGNB/challenge.svg" },
    { name: "마이페이지", path: "/mypage", icon: "/icon/ownerGNB/mypage.svg" },
  ];

  return (
    <div className="w-full box-border bg-yellow-300 px-[27px] py-[18px] flex justify-between items-center shadow-[0px_-6px_14px_0px_rgba(47,47,47,0.04)]">
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
