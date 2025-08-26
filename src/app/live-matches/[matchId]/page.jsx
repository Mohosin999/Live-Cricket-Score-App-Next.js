import ScoreCard from "@/components/ScoreCard";
import Wrapper from "@/components/Wrapper";
import { getMatchesScorecard } from "@/lib/cricketApi";

const LiveMatchId = async ({ params }) => {
  const { matchId } = await params;
  const matchesScorecard = await getMatchesScorecard(matchId);
  console.log("matchesScorecard", matchesScorecard);

  return (
    <Wrapper>
      <div className="my-6">
        <ScoreCard matchScores={matchesScorecard} />
      </div>
    </Wrapper>
  );
};

export default LiveMatchId;
