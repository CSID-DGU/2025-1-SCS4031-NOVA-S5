import plugin from "tailwindcss/plugin";

export const fontPlugin = plugin(
  function ({ addBase }) {
    const fontFaces = [
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Regular.woff2') format('woff2')`,
        fontWeight: "400",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Medium.woff2') format('woff2')`,
        fontWeight: "500",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-SemiBold.woff2') format('woff2')`,
        fontWeight: "600",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Bold.woff2') format('woff2')`,
        fontWeight: "700",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Pretendard",
        src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
        fontWeight: "400",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Pretendard",
        src: `url('/fonts/Pretendard-Medium.woff2') format('woff2')`,
        fontWeight: "500",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Pretendard",
        src: `url('/fonts/Pretendard-SemiBold.woff2') format('woff2')`,
        fontWeight: "600",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Pretendard",
        src: `url('/fonts/Pretendard-Bold.woff2') format('woff2')`,
        fontWeight: "700",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Noto Sans KR",
        src: `url('/fonts/NotoSans-Regular.woff2') format('woff2')`,
        fontWeight: "400",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Noto Sans KR",
        src: `url('/fonts/NotoSans-Medium.woff2') format('woff2')`,
        fontWeight: "500",
        fontDisplay: "swap",
      },
      {
        fontFamily: "Noto Sans KR",
        src: `url('/fonts/NotoSans-Bold.woff2') format('woff2')`,
        fontWeight: "700",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Regular.woff2') format('woff2')`,
        fontWeight: "400",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Medium.woff2') format('woff2')`,
        fontWeight: "500",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-SemiBold.woff2') format('woff2')`,
        fontWeight: "600",
        fontDisplay: "swap",
      },
      {
        fontFamily: "SUITE",
        src: `url('/fonts/SUITE-Bold.woff2') format('woff2')`,
        fontWeight: "700",
        fontDisplay: "swap",
      },
    ];

    fontFaces.forEach(font => {
      addBase({
        "@font-face": font,
      });
    });
  },
  {
    theme: {
      extend: {
        fontFamily: {
          suite: ["SUITE", "sans-serif"],
          pretendard: ["Pretendard", "sans-serif"],
          noto: ["Noto Sans KR", "sans-serif"],
          suit: ["SUIT", "sans-serif"],
        },
      },
    },
  }
);
