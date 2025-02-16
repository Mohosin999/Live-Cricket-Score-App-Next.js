import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const RecentMatches = async () => {
  const recentMatches = await getRecentMatches();

  return (
    <Wrapper>
      <MatchOverview matches={recentMatches} />
    </Wrapper>
  );
};

export default RecentMatches;
