import { ChallengeStatus } from "@/shared/model";

export function getChallengeStatus(startDate: string, endDate: string): ChallengeStatus {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "ongoing";
  return "completed";
}
