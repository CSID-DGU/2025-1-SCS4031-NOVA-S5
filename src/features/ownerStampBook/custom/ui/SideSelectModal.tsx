"use client";

interface SideSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (side: "front" | "back") => void;
}

export default function SideSelectModal({ isOpen, onClose, onSelect }: SideSelectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-font-green">면 선택</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="flex-1 py-4 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-300 hover:text-font-green"
            onClick={() => onSelect("front")}>
            앞면
          </button>
          <button
            className="flex-1 py-4 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-300 hover:text-font-green"
            onClick={() => onSelect("back")}>
            뒷면
          </button>
        </div>
      </div>
    </div>
  );
}
