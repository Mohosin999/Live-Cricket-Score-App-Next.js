import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getLiveMatches } from "@/lib/cricketApi";

const LiveMatches = async () => {
  const liveMatches = await getLiveMatches();

  return (
    <Wrapper>
      <MatchOverview matches={liveMatches} />
    </Wrapper>
  );
};

export default LiveMatches;
