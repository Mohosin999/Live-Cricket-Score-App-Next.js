import { getUpcomingWomenMatches } from "@/lib/cricketApi";

const International = async () => {
  const internationalMatches = await getUpcomingWomenMatches();

  // Filter matches on the server
  const filteredInternationalMatches = womenMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <div className="my-10">
      <UpcomingMatches matches={filteredInternationalMatches} />
    </div>
  );
};

export default International;
