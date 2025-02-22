import React from "react";
import Wrapper from "@/components/Wrapper";
import { getRecentMatches } from "@/lib/cricketApi";
import MatchesList from "@/components/MatchesList";
// import RecentMatches from "@/components/RecentMatches";

const InternationalRecentMatches = async () => {
  // Get all recent matches
  const recentMatches = await getRecentMatches();

  // Filter matches related to international
  const filteredRecent = recentMatches.typeMatches.filter(
    (matches) => matches.matchType === "International"
  );

  return (
    <Wrapper>
      <div className="space-y-4">
        {/* <RecentMatches matches={filteredRecent} /> */}
        <MatchesList
          matches={filteredRecent}
          routePath="/recent-matches/international"
          loadingText="Loading recent matches"
        />
      </div>
    </Wrapper>
  );
};

export default InternationalRecentMatches;
