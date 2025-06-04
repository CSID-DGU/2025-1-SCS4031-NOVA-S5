export const TIMES = [
  ...Array.from({ length: 30 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  }),
  "24:00",
];

export const CAFE_MOOD = [
  { label: "아기자기", type: "YELLOW" },
  { label: "푸근푸근", type: "YELLOW" },
  { label: "따뜻말랑", type: "YELLOW" },
  { label: "알록달록", type: "ORANGE" },
  { label: "비비드", type: "ORANGE" },
  { label: "깔끔", type: "BLACK" },
  { label: "모던", type: "BLACK" },
  { label: "힙한", type: "GREEN" },
  { label: "개성 넘치는", type: "GREEN" },
];
