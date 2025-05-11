interface CustomerCardProps {
  name: string;
  imageUrl?: string;
}

export function CustomerCard({ name, imageUrl }: CustomerCardProps) {
  const mockImgUrl =
    "https://images.unsplash.com/photo-1684216408304-4f266699c8d6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGN1dGUlMjBhbmlhbWx8ZW58MHx8MHx8fDA%3D";
  return (
    <div>
      <h1 className="text-font-green text-lg font-extrabold">고객 정보</h1>
      <div className="flex flex-row gap-2 items-center p-4 bg-yellow-300 rounded-xl w-full h-[80px] mt-4">
        <img
          src={mockImgUrl}
          alt="프로필 이미지"
          className="rounded-full object-cover w-[50px] h-[50px]"
        />
        <p className="text-font-green text-base font-bold">{name}</p>
      </div>
    </div>
  );
}
