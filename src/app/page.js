import Wrapper from "@/components/Wrapper";
import UpcomingSeries from "@/components/UpcomingSeries";
import {
  getInternationalNews,
  getLiveMatches,
  getSeries,
} from "@/lib/cricketApi";
import LatestNews from "@/components/LatestNews";
import MatchOverview from "@/components/MatchOverview";

const Home = async () => {
  const liveMatches = await getLiveMatches();
  const series = await getSeries();
  const internationNews = await getInternationalNews();

  return (
    <Wrapper>
      <div className="py-4 grid grid-cols-4 gap-10">
        {/* Live Matches Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-green-700">
            Live Matches
          </h2>
          <div className="space-y-4">
            <MatchOverview matches={liveMatches} />
          </div>
        </div>

        {/* Latest News Section */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-center text-green-700">
            Latest Cricket News
          </h2>
          <div className="py-4">
            <LatestNews newsObj={internationNews} />
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-green-700">
            Series Update
          </h2>
          <div className="space-y-4">
            <UpcomingSeries series={series} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
