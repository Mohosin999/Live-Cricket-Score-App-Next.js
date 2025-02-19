import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const InternationalRecentMatches = async () => {
  // Get all recent matches
  // const recentMatches = await getRecentMatches();

  // Filter matches related to international
  // const filteredRecent = recentMatches.typeMatches.filter(
  //   (matches) => matches.matchType === "International"
  // );

  return (
    <Wrapper>
      <div className="pt-6">
        {/* <MatchOverview
          matches={filteredRecent}
          path={"/recent-matches/international"}
        /> */}
        recent - international
      </div>
    </Wrapper>
  );
};

export default InternationalRecentMatches;
