export function getChallengeType(challengeType: string): string {
  switch (challengeType) {
    case "tumbler":
      return "주문 음료를 텀블러에 담고 사장님께 인증해요.";
    case "straw":
      return "음료 주문 시 빨대 없이 음용하고 사장님께 인증해요.";
    case "sns":
      return "카페 방문 인증 사진을 SNS에 업로드하고 사장님께 보여주세요.";
    default:
      return "챌린지 참여 방법을 확인하세요.";
  }
}
export function getChallengeShortPhrase(challengeType: string): string {
  switch (challengeType) {
    case "tumbler":
      return "텀블러에 담아갈게요";
    case "straw":
      return "빨대 사용 안해요";
    case "sns":
      return "카페 SNS 인증할게요";
    default:
      return "챌린지 문구를 확인해주세요";
  }
}
