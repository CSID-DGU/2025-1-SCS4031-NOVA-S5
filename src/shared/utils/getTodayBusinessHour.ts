type OpenHour = {
  dayOfWeek: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  lastOrder: string;
};

export function getTodayBusinessHour(openHours: OpenHour[]): {
  status: string;
  time: string;
} {
  const today = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "Asia/Seoul",
    })
    .toUpperCase(); // 예: "MONDAY"

  const todayHour = openHours.find(hour => hour.dayOfWeek === today);

  if (!todayHour) {
    return { status: "정보 없음", time: "" };
  }

  const status = todayHour.isOpen ? "운영중" : "준비중";

  let time = "영업하지 않음";

  if (todayHour.isOpen) {
    const open = todayHour.openTime.slice(0, 5);
    const close = todayHour.closeTime.slice(0, 5);
    time = `${open} - ${close}`;

    if (todayHour.lastOrder) {
      const last = todayHour.lastOrder.slice(0, 5);
      time += ` (Last order ${last})`;
    }
  }

  return { status, time };
}
