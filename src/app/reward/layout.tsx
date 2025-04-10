import "../globals.css";

export default function RewardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mobile-container">
      <main>{children}</main>
    </div>
  );
}
