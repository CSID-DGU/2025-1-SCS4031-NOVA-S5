import { ChallengeStatus } from "../model";

export const getChallengeInfo = (status: ChallengeStatus) => {
  switch (status) {
    case "upcoming":
      return {
        title: "아직 진행 예정인 챌린지가 없어요",
        description: "챌린지를 개최하면 더 많은 고객을 만날 수 있어요!",
      };
    case "ongoing":
      return {
        title: "아직 진행중인 챌린지가 없어요",
        description: "챌린지를 개최하면 더 많은 고객을 만날 수 있어요",
      };
    case "completed":
      return {
        title: "아직 완료된 챌린지가 없어요",
        description: "",
      };
    default:
      return { title: "", description: "" };
  }
};
