import Wrapper from "@/components/Wrapper";
import {
  getLiveMatches,
  getUpcomingInterantionalMatches,
} from "@/lib/cricketApi";
import MatchOverview from "@/components/MatchOverview";
import UpcomingMatches from "@/components/UpcomingMatches";

const Home = async () => {
  const liveMatches = await getLiveMatches();
  const upcomingMatches = await getUpcomingInterantionalMatches();

  // Get live match array from live matches object
  const liveMatchesArr = liveMatches?.typeMatches;

  // Filter upcoming matches from upcoming matches object
  const filteredIUpcomingMatches = upcomingMatches?.matchScheduleMap?.filter(
    (day) => day.scheduleAdWrapper
  );

  return (
    <Wrapper>
      <div className="grid grid-cols-5 gap-10">
        {/* Live Matches Section */}
        <div className="col-span-2">
          <div className="space-y-4">
            <MatchOverview matches={liveMatchesArr} colSpan1={true} />
          </div>
        </div>

        {/* Series and Upcoming series */}
        <div className="col-span-3">
          <div className="space-y-4">
            <UpcomingMatches matches={filteredIUpcomingMatches} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
