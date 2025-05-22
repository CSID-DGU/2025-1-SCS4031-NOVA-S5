interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Overlay = ({ isOpen, onClick }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ${
        isOpen ? "opacity-40 pointer-events-auto z-[50]" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
};
