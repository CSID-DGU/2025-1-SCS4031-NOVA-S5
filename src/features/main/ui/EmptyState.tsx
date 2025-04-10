import Image from "next/image";

interface EmptyStateProps {
  type: "stampBook" | "challenge";
}

const content = {
  stampBook: {
    title: "홈에 등록된 스탬프북이 없어요!",
    message: "자주 쓰는 스탬프북을 홈에 등록하고, 편리하게 적립 받아봐요",
  },
  challenge: {
    title: "참여 중인 챌린지가 없어요!",
    message: "다양한 챌린지에 참여하고, 추가 리워드를 받아봐요",
  },
};

export default function EmptyState({ type }: EmptyStateProps) {
  const { title, message } = content[type];

  return (
    <div className="w-[330px] h-[149px] flex flex-col justify-center items-center gap-[15px] bg-yellow-300 rounded-lg py-5 px-6 text-center">
      <Image src={"/img/character/orange-ear.svg"} alt="캐릭터 이미지" width={40} height={47} />
      <p className="text-sm font-bold text-[#254434]">{title}</p>
      <p className="text-xs font-[500] text-[#254434B2] whitespace-pre-line">{message}</p>
    </div>
  );
}
