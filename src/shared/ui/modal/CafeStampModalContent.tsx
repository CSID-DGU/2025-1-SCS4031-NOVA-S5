import { StampModalType } from "../../store/stampModalStore";

interface Props {
  type: StampModalType;
}

export default function StampModalContent({ type }: Props) {
  switch (type) {
    case "register":
      return (
        <p className="text-md text-font-green font-bold text-center">
          이제 홈에서
          <br />
          스탬프북을 바로 확인하실 수 있어요!
        </p>
      );
    case "home-removed":
      return (
        <p className="text-md text-font-green font-bold text-center">
          스탬프북이 홈에서 삭제됐어요.
          <br />
          이제 홈에 노출되지 않아요.
        </p>
      );
    case "delete-confirm":
      return (
        <div className="flex flex-col gap-[10px]">
          <p className="text-md text-font-green font-bold text-center">정말 삭제하시겠어요?</p>
          <p className="text-sm text-font-green font-semibold text-center">
            내 스탬프북에서 삭제하면 모은 스탬프도
            <br />
            사라져요!
          </p>
        </div>
      );
    case "delete":
      return (
        <p className="text-md text-font-green font-bold text-center">
          내 스탬프북이 삭제됐어요.
          <br />
          다음에 또 찾아주세요!
        </p>
      );
    default:
      return null;
  }
}
