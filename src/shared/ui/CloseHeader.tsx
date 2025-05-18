import Image from "next/image";
interface CloseHeaderProps {
  title: string;
  onClick: () => void;
}

export function CloseHeader({ title, onClick }: CloseHeaderProps) {
  return (
    <header className="flex flex-row justify-between items-center">
      <h1 className="text-xl text-font-green font-extrabold">{title}</h1>
      <button onClick={onClick}>
        <Image src="/icon/exit.svg" alt="exit" width={25} height={25} />
      </button>
    </header>
  );
}
