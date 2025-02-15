import Link from "next/link";
import UpcomingMatches from "@/components/UpcomingMatches";
import {
  getUpcomingInterantionalMatches,
  getUpcomingWomenMatches,
} from "@/lib/cricketApi";

const CricketSchedule = () => {
  const getInternationalMatches = getUpcomingInterantionalMatches;
  const getWomenMatches = getUpcomingWomenMatches;
  return (
    <div>
      <div className="flex items-center justify-center gap-14">
        <Link href="cricket-schedule/international">International</Link>
        <Link href="cricket-schedule/domestic">Domestic</Link>
        <Link href="cricket-schedule/women">Women</Link>
        <Link href="cricket-schedule/all-matches">All Matches</Link>
      </div>

      <UpcomingMatches getFuncUpcomingMatches={getInternationalMatches} />
      <UpcomingMatches getFuncUpcomingMatches={getWomenMatches} />
    </div>
  );
};

export default CricketSchedule;
