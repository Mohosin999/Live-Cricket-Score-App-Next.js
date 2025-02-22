import React from "react";
import Wrapper from "@/components/Wrapper";
import { getRecentMatches } from "@/lib/cricketApi";
import RecentMatches from "@/components/RecentMatches";
import CricketArticles from "@/components/CricketArticles";

const InternationalRecentMatches = async () => {
  // Get all recent matches
  const recentMatches = await getRecentMatches();

  // Filter matches related to international
  const filteredRecent = recentMatches.typeMatches.filter(
    (matches) => matches.matchType === "International"
  );

  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <RecentMatches matches={filteredRecent} />
        </div>
        {/* Live Matches Section */}
        {/* <div className="col-span-1">
          <div className="space-y-4">
            <CricketArticles />
          </div>
        </div> */}

        {/* Series and Upcoming series */}
        {/* <div className="col-span-2">
          <div className="space-y-4">
            <RecentMatches matches={filteredRecent} />
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default InternationalRecentMatches;
