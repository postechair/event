import type { Metadata } from "next";
import "@/styles/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "나에게 맞는 AI 행사 찾기 | POSTECH 인사팀·AIR센터",
  description:
    "2026 하반기 POSTECH AI 행사 선택 가이드 — Working Group·고급교육(AX Leaders)·공모전 중 나에게 맞는 행사를 진단형 가이드와 비교표로 찾아보세요.",
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
