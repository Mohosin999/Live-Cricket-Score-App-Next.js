import UpcomingMatches from "@/components/UpcomingMatches";
import Wrapper from "@/components/Wrapper";
import { getUpcomingInterantionalMatches } from "@/lib/cricketApi";

const International = async () => {
  const upcomingMatches = await getUpcomingInterantionalMatches();

  // Filter matches on the server
  const filteredUpcomingMatches = upcomingMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <Wrapper>
      <UpcomingMatches matches={filteredUpcomingMatches} />
    </Wrapper>
  );
};

export default International;
