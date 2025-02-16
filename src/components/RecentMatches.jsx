"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { getRecentMatches } from "../lib/cricketApi";
import Title from "./ui/Title";

const RecentMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchRecentMatches = async () => {
      try {
        const data = await getRecentMatches();
        console.log("recent ->", data);

        const recentMatches = data?.typeMatches;
        setMatches(recentMatches);
      } catch (error) {
        console.error("Error fetching recent matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentMatches();
  }, []);

  const handleMatchClick = (matchId) => {
    // Navigate to the scoreboard page with the matchId
    router.push(`/recent/${matchId}`);
  };

  if (loading)
    return (
      <p className="text-center text-gray-500">Loading recent matches...</p>
    );

  return (
    <div className="">
      <Title title="Recent Matches" />
      {matches?.length > 0 ? (
        <div>
          {matches.map((match, index) => {
            const matchType = match?.matchType;

            return (
              <div key={index}>
                {match?.seriesMatches
                  ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
                  .map((seriesMatch, index) => {
                    const matchInformation =
                      seriesMatch.seriesAdWrapper.matches[0];
                    const matchId = matchInformation.matchInfo.matchId; // Corrected matchId extraction

                    return (
                      <div
                        key={index}
                        className="py-8 cursor-pointer" // Add cursor-pointer to indicate clickable
                        onClick={() => handleMatchClick(matchId)}
                      >
                        {/* Series name */}
                        <p className="text-base font-bold">
                          {seriesMatch.seriesAdWrapper.seriesName} {matchType}
                        </p>
                        {/* Location */}
                        <p className="text-xs text-gray-600">
                          {matchInformation.matchInfo.matchDesc} •{" "}
                          {matchInformation.matchInfo.venueInfo.city},{" "}
                          {matchInformation.matchInfo.venueInfo.ground}
                        </p>

                        {matchInformation?.matchScore?.team1Score?.inngs1 ? (
                          <div className="flex flex-col gap-1 items-center mt-3 mb-2">
                            {/* First Innings */}
                            <div className="w-full flex items-center justify-between text-sm">
                              <p>
                                {matchInformation.matchInfo?.team1?.teamName}
                              </p>
                              <p>
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.runs
                                }{" "}
                                /{" "}
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.wickets
                                }{" "}
                                (
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.overs
                                }
                                )
                              </p>
                            </div>

                            {/* Second Innings */}
                            <div className="w-full flex items-center justify-between text-sm">
                              <p>
                                {matchInformation.matchInfo?.team2?.teamName}
                              </p>
                              {matchInformation?.matchScore?.team2Score
                                ?.inngs1 ? (
                                <p>
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.runs
                                  }{" "}
                                  /{" "}
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.wickets
                                  }{" "}
                                  (
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.overs
                                  }
                                  )
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-500">Score not available</p>
                        )}

                        {/* Final result and who won */}
                        <p
                          className={`text-sm ${
                            matchInformation.matchInfo?.state === "Complete"
                              ? "text-blue-600"
                              : "text-red-600"
                          }`}
                        >
                          {matchInformation.matchInfo?.status}
                        </p>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-red-500">No recent matches available.</p>
      )}
    </div>
  );
};

export default RecentMatches;
