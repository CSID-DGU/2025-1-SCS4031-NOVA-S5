export const TIMES = [
  ...Array.from({ length: 30 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  }),
  "24:00",
];

export const CAFE_MOOD = [
  "아기자기",
  "푸근푸근",
  "따뜻말랑",
  "알록달록",
  "비비드",
  "깔끔",
  "모던",
  "힙한",
  "개성 넘치는",
];
