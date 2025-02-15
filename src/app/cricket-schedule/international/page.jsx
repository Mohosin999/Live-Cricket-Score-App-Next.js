import UpcomingMatches from "@/components/UpcomingMatches";
import { getUpcomingInterantionalMatches } from "@/lib/cricketApi";

const International = async () => {
  const internationalMatches = await getUpcomingInterantionalMatches();

  // Filter matches on the server
  const filteredInternationalMatches =
    internationalMatches?.matchScheduleMap?.filter(
      (day) => day.scheduleAdWrapper
    );

  return (
    <div className="my-10">
      <UpcomingMatches matches={filteredInternationalMatches} />
    </div>
  );
};

export default International;
