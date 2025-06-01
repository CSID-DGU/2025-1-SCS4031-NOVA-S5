import clsx from "clsx";

type ChallengeStatus = "upcoming" | "ongoing" | "completed";

interface ChallengeTabProps {
  status: ChallengeStatus;
  setStatus: (status: ChallengeStatus) => void;
  isOwner?: boolean;
}

const OWNER_STATUS_LABELS: Record<ChallengeStatus, string> = {
  upcoming: "진행예정",
  ongoing: "진행중",
  completed: "완료",
};

const CUSTOMER_STATUS_LABELS: Record<ChallengeStatus, string> = {
  upcoming: "둘러보기",
  ongoing: "진행중",
  completed: "완료",
};

export const ChallengeTab = ({ status, setStatus, isOwner = false }: ChallengeTabProps) => {
  const labels = isOwner ? OWNER_STATUS_LABELS : CUSTOMER_STATUS_LABELS;

  return (
    <div className="flex justify-center">
      {(Object.keys(labels) as ChallengeStatus[]).map(mode => (
        <button
          key={mode}
          onClick={() => setStatus(mode)}
          className={clsx(
            "px-4 py-2 text-sm font-medium w-full",
            status === mode
              ? "border-b-4 border-tabbar text-font-green"
              : "text-disabledfont border-b-4 border-[#E2ECDC]"
          )}>
          {labels[mode]}
        </button>
      ))}
    </div>
  );
};
