import React from "react";
import Wrapper from "@/components/Wrapper";
import MatchOverview from "@/components/MatchOverview";
import { getLiveMatches } from "@/lib/cricketApi";

const LiveMatches = async () => {
  const liveMatches = await getLiveMatches();
  const filteredLiveMatches = liveMatches?.typeMatches;

  return (
    <Wrapper>
      <MatchOverview
        matches={filteredLiveMatches}
        path={"/live-matches"}
        ffilterType="live"
      />
    </Wrapper>
  );
};

export default LiveMatches;
