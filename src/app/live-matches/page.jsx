import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getLiveMatches } from "@/lib/cricketApi";

const LiveMatches = async () => {
  const liveMatches = await getLiveMatches();
  console.log("Log from live page -> ", liveMatches);

  return (
    <Wrapper>
      <MatchOverview
        matches={liveMatches}
        path={"/live-matches"}
        ffilterType="live"
      />
    </Wrapper>
  );
};

export default LiveMatches;
