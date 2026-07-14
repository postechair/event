import type { Metadata } from "next";
import "@/styles/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 AIR EVENT | POSTECH AIR센터",
  description:
    "Working Group · AX 부트캠프(고급교육) · AX 공모전 — 포스텍 구성원의 AI 전환(AX)을 돕는 2026 하반기 AI 행사 안내와 신청.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
