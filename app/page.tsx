import NoticeBar from "@/components/NoticeBar";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import GuideDiagnostic from "@/components/GuideDiagnostic";
import GuideTable from "@/components/GuideTable";
import EventWorkingGroup from "@/components/EventWorkingGroup";
import EventEducation from "@/components/EventEducation";
import EventCompetition from "@/components/EventCompetition";
import ApplySection from "@/components/ApplySection";
import SiteFooter from "@/components/SiteFooter";
import MobileCta from "@/components/MobileCta";

export default function Home() {
  return (
    <>
      <NoticeBar />
      <SiteNav />
      <main>
        <Hero />
        <GuideDiagnostic />
        <GuideTable />
        <EventWorkingGroup />
        <EventEducation />
        <EventCompetition />
        <ApplySection />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
