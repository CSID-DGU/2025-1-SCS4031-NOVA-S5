"use client";

interface HamburgerProps {
  isOpen: boolean;
  onClose: () => void;
  position: {
    top: number;
    right: number;
  };
  onExposeRequest: () => void;
}

export default function Hamburger({ isOpen, onClose, position, onExposeRequest }: HamburgerProps) {
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
            onClick={() => {
              onClose();
              onExposeRequest();
            }}>
            스탬프북 노출
          </button>
          <button
            className="w-full h-[52px] text-sm text-font-green font-semibold hover:bg-yellow-400 transition-colors"
            onClick={() => {
              onClose();
            }}>
            스탬프북 등록 예시
          </button>
        </div>
      </div>
    </>
  );
}
