import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const LeagueRecentMatches = async () => {
  // Get all recent matches
  const recentMatches = await getRecentMatches();

  // Filter matches related to league
  const filteredRecent = recentMatches.typeMatches.filter(
    (matches) => matches.matchType === "League"
  );

  return (
    <Wrapper>
      <div className="pt-6">
        <MatchOverview
          matches={filteredRecent}
          path={"/recent-matches/league"}
        />
      </div>
    </Wrapper>
  );
};

export default LeagueRecentMatches;
