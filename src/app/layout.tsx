import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/config/analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "yoouyeon.dev",
  description: "Frontend developer yoouyeon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.className} ${notoSerifKR.className}`}
    >
      {/* FIXME */}
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class">
          <Header />
          <main className="flex-1 py-32 max-w-screen-sm mx-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
