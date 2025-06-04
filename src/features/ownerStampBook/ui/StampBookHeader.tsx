export default function StampBookHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[50] bg-yellow-100 w-full max-w-[430px] mx-auto flex flex-col px-[25px]">
      <div className="py-6">
        <p className="text-xl text-font-green font-extrabold">스탬프북 리스트</p>
      </div>
      <div className="w-full h-[1px] bg-green-300" />
    </header>
  );
}
