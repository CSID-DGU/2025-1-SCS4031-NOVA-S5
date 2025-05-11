"use client";

interface QrScanHeaderProps {
  title: string;
  onExit?: () => void;
}

export function QrScanHeader({ title, onExit }: QrScanHeaderProps) {
  const handleExit = () => {
    if (onExit) {
      onExit();
    }
    return;
  };

  return (
    <header className="flex items-center justify-between h-[71px]">
      <h1 className="text-font-green text-[20px] font-extrabold">{title}</h1>
      <img
        src="/icon/exit.svg"
        alt="exit"
        className="w-[25px] h-[25px] cursor-pointer"
        onClick={handleExit}
      />
    </header>
  );
}
