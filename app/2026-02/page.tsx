import type { Metadata } from "next";
import BackBar from "@/components/BackBar";
import EventEducation from "@/components/EventEducation";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "AX 부트캠프(고급교육) | 2026 AIR EVENT",
  description: "POSTECH AIR센터 2026 AIR EVENT — ② AX 부트캠프(고급교육) 안내와 사전수요조사 신청.",
};

export default function Page() {
  return (
    <>
      <BackBar />
      <main>
        <EventEducation eyebrow="AIR센터 2026년 행사 안내" />
      </main>
      <SiteFooter />
    </>
  );
}
