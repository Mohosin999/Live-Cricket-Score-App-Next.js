import UpcomingMatches from "@/components/UpcomingMatches";
import { getUpcomingDomesticMatches } from "@/lib/cricketApi";

const Domestic = async () => {
  const domesticMatches = await getUpcomingDomesticMatches();

  // Filter matches on the server
  const filteredDomesticMatches = domesticMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <div className="my-10">
      <UpcomingMatches matches={filteredDomesticMatches} />
    </div>
  );
};

export default Domestic;
