interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Overlay = ({ isOpen, onClick }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ${
        isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
};
