import type { Metadata } from "next";
import BackBar from "@/components/BackBar";
import EventWorkingGroup from "@/components/EventWorkingGroup";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Working Group | 2026 AIR EVENT",
  description: "POSTECH AIR센터 2026 AIR EVENT — ① Working Group 안내와 참여 문의.",
};

export default function Page() {
  return (
    <>
      <BackBar />
      <main>
        <EventWorkingGroup eyebrow="AIR센터 2026년 행사 안내" />
      </main>
      <SiteFooter />
    </>
  );
}
