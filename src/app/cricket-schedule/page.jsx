import Link from "next/link";
import UpcomingMatches from "@/components/UpcomingMatches";
import {
  getUpcomingInterantionalMatches,
  getUpcomingWomenMatches,
} from "@/lib/cricketApi";

const CricketSchedule = async () => {
  const internationalMatches = await getUpcomingInterantionalMatches();
  const womenMatches = await getUpcomingWomenMatches();

  // Filter matches on the server
  const filteredInternationalMatches =
    internationalMatches?.matchScheduleMap?.filter(
      (day) => day.scheduleAdWrapper
    );
  const filteredWomenMatches = womenMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <div className="my-10">
      <div className="flex items-center justify-center gap-14">
        <Link href="cricket-schedule/international">International</Link>
        <Link href="cricket-schedule/domestic">Domestic</Link>
        <Link href="cricket-schedule/women">Women</Link>
        <Link href="cricket-schedule/all-matches">All Matches</Link>
      </div>

      {/* Pass filtered data as props */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UpcomingMatches matches={filteredInternationalMatches} />
        <UpcomingMatches matches={filteredWomenMatches} />
      </div>
    </div>
  );
};

export default CricketSchedule;
