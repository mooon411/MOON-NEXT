import { Inter } from "next/font/google";
import Head from "next/head";
import "@/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer MOON",
  description: "신입 프론트엔드 개발자의 포트폴리오 사이트입니다.",
  keywords: [
    "포트폴리오",
    "리액트",
    "next.js",
    "portfolio",
    "신입개발자",
    "개발자 포트폴리오",
    "웹퍼블리셔",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="@/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <title>{metadata.title}</title>

        {/* 외부 폰트 로드 */}
        <style dangerouslySetInnerHTML={{ __html: inter }} />

        {/* 파비콘 추가 */}
      </Head>
      <body>{children}</body>
    </html>
  );
}
