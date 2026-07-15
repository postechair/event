import type { Metadata } from "next";
import BackBar from "@/components/BackBar";
import EventCompetition from "@/components/EventCompetition";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "AX 공모전 | 2026 AIR EVENT",
  description: "POSTECH AIR센터 2026 AIR EVENT — ③ AX 공모전 안내와 참여 신청.",
};

export default function Page() {
  return (
    <>
      <BackBar />
      <main>
        <EventCompetition eyebrow="AIR센터 2026년 행사 안내" />
      </main>
      <SiteFooter />
    </>
  );
}
