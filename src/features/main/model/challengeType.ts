export type Challenge = {
  id: number;
  challengeTitle: string;
  currentDay: number;
  totalDay: number;
};

export interface ChallengeState {
  challenges: Challenge[];
  setChallenges: (books: Challenge[]) => void;
}
