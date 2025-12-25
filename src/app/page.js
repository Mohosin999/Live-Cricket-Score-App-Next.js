import Wrapper from "@/components/Wrapper";
import { getLiveMatches } from "@/lib/cricketApi";
import CricketArticles from "@/components/CricketArticles";
import MatchesList from "@/components/MatchesList";
import GoToTopButton from "@/components/GoToTopButton";

export const revalidate = 60; // Revalidate every 60 seconds

const Home = async () => {
  const liveMatches = await getLiveMatches();

  // Get live match array from live matches object
  const liveMatchesArr = liveMatches?.typeMatches;

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Live Matches Section */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            <MatchesList
              matches={liveMatchesArr}
              routePath="/live-matches"
              loadingText="Loading live matches"
              live={true}
            />
          </div>
        </div>

        {/* Series and Upcoming series */}
        <div className="md:col-span-3 mt-10 md:mt-0">
          <div className="space-y-4">
            <CricketArticles />
          </div>
        </div>
      </div>

      <GoToTopButton />
    </Wrapper>
  );
};

export default Home;
