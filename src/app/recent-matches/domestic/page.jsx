import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const DomesticRecentMatches = async () => {
  // Get all recent matches
  const recentMatches = await getRecentMatches();

  // Filter matches related to domestic
  const filteredRecent = recentMatches.typeMatches.filter(
    (matches) => matches.matchType === "Domestic"
  );

  console.log("console from recent domestic -> ", recentMatches);

  return (
    <Wrapper>
      <div className="pt-6">
        <MatchOverview
          matches={filteredRecent}
          path={"/recent-matches/domestic"}
        />
      </div>
    </Wrapper>
  );
};

export default DomesticRecentMatches;
