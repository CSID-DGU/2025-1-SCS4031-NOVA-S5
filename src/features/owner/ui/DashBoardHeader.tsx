export function DashBoardHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center border-b border-[#E2ECDC] h-[52px]">
      <h1 className="text-font-green text-[20px] font-extrabold">{title}</h1>
    </header>
  );
}
