import { getUpcomingWomenMatches } from "@/lib/cricketApi";

const Women = async () => {
  const womenMatches = await getUpcomingWomenMatches();

  // Filter matches on the server
  const filteredWomenMatches = womenMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <div className="my-10">
      <UpcomingMatches matches={filteredWomenMatches} />
    </div>
  );
};

export default Women;
