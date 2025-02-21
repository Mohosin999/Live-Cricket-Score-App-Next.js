import UpcomingMatches from "@/components/UpcomingMatches";
import Wrapper from "@/components/Wrapper";
import { getUpcomingDomesticMatches } from "@/lib/cricketApi";

const Domestic = async () => {
  const domesticMatches = await getUpcomingDomesticMatches();

  // Filter matches on the server
  const filteredDomesticMatches = domesticMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <Wrapper>
      <UpcomingMatches matches={filteredDomesticMatches} />
    </Wrapper>
  );
};

export default Domestic;
