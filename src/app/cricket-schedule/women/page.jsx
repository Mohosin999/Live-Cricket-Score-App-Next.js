import UpcomingMatches from "@/components/UpcomingMatches";
import Wrapper from "@/components/Wrapper";
import { getUpcomingWomenMatches } from "@/lib/cricketApi";

const Women = async () => {
  const womenMatches = await getUpcomingWomenMatches();

  // Filter matches on the server
  const filteredWomenMatches = womenMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <Wrapper>
      <UpcomingMatches matches={filteredWomenMatches} />
    </Wrapper>
  );
};

export default Women;
