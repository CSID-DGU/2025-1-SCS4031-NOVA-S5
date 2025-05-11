interface CustomerCardProps {
  name: string;
  imageUrl?: string;
}

export function CustomerCard({ name, imageUrl }: CustomerCardProps) {
  return (
    <div>
      <h1 className="text-font-green text-lg font-extrabold">고객 정보</h1>
      <div className="flex flex-row gap-2 items-center p-4 bg-yellow-300 rounded-xl w-full h-[80px] mt-4">
        <img
          src={imageUrl}
          alt="프로필 이미지"
          className="rounded-full object-cover w-[50px] h-[50px]"
        />
        <p className="text-font-green text-base font-bold">{name}</p>
      </div>
    </div>
  );
}
