import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getRecentMatches } from "@/lib/cricketApi";

const Recent = async () => {
  const recentMatches = await getRecentMatches();

  // Filter matches on the server
  const filteredRecentMatches = recentMatches?.typeMatches;

  return (
    <Wrapper>
      <MatchOverview matches={filteredRecentMatches} />
    </Wrapper>
  );
};

export default Recent;
