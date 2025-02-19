import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const WomenRecentMatches = async () => {
  // Get all recent matches
  const recentMatches = await getRecentMatches();

  // Filter matches related to women
  const filteredRecent = recentMatches.typeMatches.filter(
    (matches) => matches.matchType === "Women"
  );

  return (
    <Wrapper>
      <div className="pt-6">
        <MatchOverview
          matches={filteredRecent}
          path={"/recent-matches/women"}
        />
      </div>
    </Wrapper>
  );
};

export default WomenRecentMatches;
