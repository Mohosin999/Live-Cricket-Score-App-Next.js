import LiveMatches from "@/components/LiveMatches";
import UpcomingMatches from "@/components/UpcomingMatches";
import Wrapper from "@/components/Wrapper";
import { getUpcomingInterantionalMatches } from "@/lib/cricketApi";

const Home = async () => {
  // const internationalMatches = await getUpcomingInterantionalMatches();

  // // Filter matches on the server
  // const filteredInternationalMatches =
  //   internationalMatches?.matchScheduleMap?.filter(
  //     (day) => day.scheduleAdWrapper
  //   );

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center gap-1 py-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to LiveScore
        </h1>
        <p className="text-gray-600">
          A live score app that allows users to track and monitor live cricket
          matches from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>{/* <LiveMatches /> */}</div>
        <div>
          {/* <UpcomingMatches matches={filteredInternationalMatches} /> */}0
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
