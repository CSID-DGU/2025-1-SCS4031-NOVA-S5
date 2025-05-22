export function getChallengeDay(startDate: Date, endDate: Date) {
  const today = new Date();
  const diffStart = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const diffEnd = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (today < startDate) {
    return { status: "upcoming", message: `D-${diffStart}` };
  } else if (today > endDate) {
    const daysPassed = Math.abs(diffEnd);
    return { status: "completed", message: `D+${daysPassed}` };
  } else {
    return { status: "ongoing", message: `D-${diffEnd}` };
  }
}
