import UpcomingMatches from "@/components/UpcomingMatches";
import Wrapper from "@/components/Wrapper";
import { getUpcomingLeagueMatches } from "@/lib/cricketApi";

const League = async () => {
  const LeagueMatches = await getUpcomingLeagueMatches();

  // Filter matches on the server
  const filteredLeagueMatches = LeagueMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <Wrapper>
      <UpcomingMatches matches={filteredLeagueMatches} />
    </Wrapper>
  );
};

export default League;
