import Wrapper from "@/components/Wrapper";
import ScoreCard from "@/components/ScoreCard";
import { getMatchesScorecard } from "@/lib/cricketApi";

const InternationalRecentMatchId = async ({ params }) => {
  const { matchId } = await params;
  const matchesScorecard = await getMatchesScorecard(matchId);

  return (
    <Wrapper>
      <div className="my-6">
        <ScoreCard matchScores={matchesScorecard} />
      </div>
    </Wrapper>
  );
};

export default InternationalRecentMatchId;
