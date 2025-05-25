export const DAYS_OF_WEEK = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
] as const;

export const getCurrentDayOfWeek = () => {
  const now = new Date();
  const today = now.getDay();
  return DAYS_OF_WEEK[today];
};

export const getCurrentDateString = () => {
  const now = new Date();
  return now.toISOString().split("T")[0];
};

export const formatBusinessHours = (
  openHours: {
    dayOfWeek: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    lastOrder: string;
  }[],
  specialDays: {
    specialDate: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
    lastOrder: string;
    note: string;
  }[] = []
) => {
  const todayStr = getCurrentDayOfWeek();
  const todayDateStr = getCurrentDateString();

  const todaySpecial = specialDays?.find(day => day.specialDate === todayDateStr);

  if (todaySpecial) {
    if (todaySpecial.isOpen && todaySpecial.openTime && todaySpecial.closeTime) {
      return `${todaySpecial.openTime.slice(0, 5)} ~ ${todaySpecial.closeTime.slice(0, 5)}`;
    }
  } else {
    const todayHours = openHours?.find(h => h.dayOfWeek === todayStr);
    if (todayHours?.isOpen && todayHours.openTime && todayHours.closeTime) {
      return `${todayHours.openTime.slice(0, 5)} ~ ${todayHours.closeTime.slice(0, 5)}`;
    }
  }

  return "영업시간 정보 없음";
};
