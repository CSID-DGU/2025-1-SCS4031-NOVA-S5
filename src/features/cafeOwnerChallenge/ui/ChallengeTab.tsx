import clsx from "clsx";
import { ChallengeStatus } from "../model";

interface ChallengeTabProps {
  status: ChallengeStatus;
  setStatus: (status: ChallengeStatus) => void;
}

const STATUS_LABELS: Record<ChallengeStatus, string> = {
  upcoming: "진행예정",
  ongoing: "진행중",
  completed: "완료",
};

export const ChallengeTab = ({ status, setStatus }: ChallengeTabProps) => {
  return (
    <div className="flex justify-center">
      {(Object.keys(STATUS_LABELS) as ChallengeStatus[]).map(mode => (
        <button
          key={mode}
          onClick={() => setStatus(mode)}
          className={clsx(
            "px-4 py-2 text-sm font-medium w-full",
            status === mode
              ? "border-b-4 border-tabbar text-font-green"
              : "text-disabledfont border-b-4 border-[#E2ECDC]"
          )}>
          {STATUS_LABELS[mode]}
        </button>
      ))}
    </div>
  );
};
