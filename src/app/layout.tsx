import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "../shared/providers/QueryProvider";
import { SessionProvider } from "next-auth/react";
import AuthSessionProvider from "@/shared/providers/AuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecok.co.kr/"),
  title: "Ecok | Integrated Stamp Management Service, Ecok",
  description: "통합 카페 스탬프북 관리 서비스",
  manifest: "/manifest.json",
  icons: {
    icon: "/ecokIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/ecokIcon.png" />

        {/* iPhone 16 Pro Max */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Pro_Max_portrait.png"
        />
        {/* iPhone 16 Pro */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Pro_portrait.png"
        />
        {/* iPhone 16 Plus / 15 Pro Max / 15 Plus / 14 Pro Max */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png"
        />
        {/* iPhone 16 / 15 Pro / 15 / 14 Pro */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png"
        />
        {/* iPhone 14 Plus / 13 Pro Max / 12 Pro Max */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
        />
        {/* iPhone 14 / 13 Pro / 13 / 12 Pro / 12 */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
        />
        {/* iPhone 13 mini / 12 mini / 11 Pro / XS / X */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
        />
        {/* iPhone 11 Pro Max / XS Max */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
        />
        {/* iPhone 11 / XR */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="/assets/splash/iPhone_11__iPhone_XR_portrait.png"
        />
        {/* iPhone 8 Plus / 7 Plus / 6s Plus / 6 Plus */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
        />
        {/* iPhone 8 / 7 / 6s / 6 / 4.7" / SE */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="/assets/splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
        />
        {/* iPhone 4 / SE / iPod touch 5th generation and later */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="/assets/splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <AuthSessionProvider>
            <div className="mobile-container">
              <main className="main-content">{children}</main>
            </div>
          </AuthSessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
