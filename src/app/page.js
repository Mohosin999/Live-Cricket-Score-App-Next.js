import Wrapper from "@/components/Wrapper";
import {
  getLiveMatches,
  getUpcomingInterantionalMatches,
} from "@/lib/cricketApi";
import LiveMatchesComp from "@/components/LiveMatchesComp";
import CricketArticles from "@/components/CricketArticles";
import NoMatchesAvailable from "@/components/NoMatchesAvailable";

const Home = async () => {
  // const liveMatches = await getLiveMatches();

  // Get live match array from live matches object
  // const liveMatchesArr = liveMatches?.typeMatches;

  return (
    <Wrapper>
      <div className="grid grid-cols-5 gap-10">
        {/* Live Matches Section */}
        <div className="col-span-2">
          <div className="space-y-4">
            {/* <LiveMatchesComp matches={liveMatchesArr} /> */}
          </div>

          <NoMatchesAvailable title="No live matches available at this moment!" />
        </div>

        {/* Series and Upcoming series */}
        <div className="col-span-3">
          <div className="space-y-4  h-screen overflow-y-auto">
            <CricketArticles />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
