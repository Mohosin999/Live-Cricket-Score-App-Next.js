import Link from "next/link";
import UpcomingMatches from "@/components/UpcomingMatches";
import { getUpcomingInterantionalMatches } from "@/lib/cricketApi";

const CricketSchedule = async () => {
  const internationalMatches = await getUpcomingInterantionalMatches();

  // Filter matches on the server
  const filteredInternationalMatches =
    internationalMatches?.matchScheduleMap?.filter(
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
        {/* Left side */}
        <UpcomingMatches matches={filteredInternationalMatches} />

        {/* Right side */}
        <div>Right side</div>
      </div>
    </div>
  );
};

export default CricketSchedule;
