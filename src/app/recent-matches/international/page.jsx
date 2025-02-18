import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const RecentMatches = async () => {
  const recentMatches = await getRecentMatches();

  return (
    <Wrapper>
      <div className="pt-6">
        <MatchOverview
          matches={recentMatches}
          path={"/recent-matches/international"}
          filterType="recent"
        />
      </div>
    </Wrapper>
  );
};

export default RecentMatches;
