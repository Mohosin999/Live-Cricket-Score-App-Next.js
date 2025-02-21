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

  console.log("live match from home page -> ", liveMatches);

  return (
    <Wrapper>
      <div className="grid grid-cols-6 gap-10 pt-6">
        {/* Live Matches Section */}
        <div className="col-span-2">
          <div className="space-y-4 h-screen overflow-y-auto no-scrollbar">
            <MatchOverview matches={liveMatches} colSpan1={true} />
          </div>
        </div>

        {/* Latest News Section */}
        <div className="col-span-3">
          <div className="py-4 h-screen overflow-y-auto no-scrollbar">
            <LatestNews newsObj={internationNews} />
          </div>
        </div>

        {/* Series and Upcoming series */}
        <div className="col-span-1">
          <div className="space-y-4 h-screen overflow-y-auto no-scrollbar">
            <UpcomingSeries series={series} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
