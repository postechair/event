import Cover from "@/components/Cover";
import GuideDiagnostic from "@/components/GuideDiagnostic";
import GuideTable from "@/components/GuideTable";
import EventWorkingGroup from "@/components/EventWorkingGroup";
import EventEducation from "@/components/EventEducation";
import EventCompetition from "@/components/EventCompetition";
import ApplySection from "@/components/ApplySection";

export default function Home() {
  return (
    <main className="stack">
      <Cover />
      <GuideDiagnostic />
      <GuideTable />
      <EventWorkingGroup />
      <EventEducation />
      <EventCompetition />
      <ApplySection />
    </main>
  );
}
