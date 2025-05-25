"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeStampBookExposed } from "@/shared/api/stampbook";

interface HamburgerProps {
  designId: number;
  isOpen: boolean;
  onClose: () => void;
  exposed: boolean;
  position: {
    top: number;
    right: number;
  };
}

export default function Hamburger({
  designId,
  isOpen,
  onClose,
  exposed,
  position,
}: HamburgerProps) {
  const queryClient = useQueryClient();

  const { mutate: changeExposed } = useMutation({
    mutationFn: async () => {
      await changeStampBookExposed(designId, !exposed);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stampBooks"] });
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div
        className="fixed z-50"
        style={{
          top: `${position.top}px`,
          right: `${position.right}px`,
        }}>
        <div className="flex flex-col w-[172px] h-[104px] bg-yellow-300 rounded-[15px]">
          <button
            className="w-full h-[52px] text-sm text-font-green font-semibold hover:bg-yellow-400 transition-colors"
            onClick={() => changeExposed()}>
            스탬프북 노출
          </button>
          <button
            className="w-full h-[52px] text-sm text-font-green font-semibold hover:bg-yellow-400 transition-colors"
            onClick={() => {
              // TODO: 스탬프북 등록 예시 기능 구현
              onClose();
            }}>
            스탬프북 등록 예시
          </button>
        </div>
      </div>
    </>
  );
}
