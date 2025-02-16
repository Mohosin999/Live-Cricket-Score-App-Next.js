"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import Loading from "./ui/Loading";

const MatchOverview = ({ matches }) => {
  const router = useRouter();

  /**
   * Handles the click event for a match.
   * Navigates to the scoreboard page for the selected match.
   *
   * @param {string} matchId - The unique ID of the match.
   */
  const handleMatchClick = (matchId) => {
    router.push(`/recent-matches/${matchId}`);
  };

  if (!matches) return <Loading text="Loading upcoming women matches..." />;

  return (
    <div>
      {matches?.length > 0 ? (
        <div>
          {matches.map((match, index) => (
            <div key={index}>
              {match?.seriesMatches
                ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
                .map((seriesMatch, index) => (
                  <div key={index}>
                    {seriesMatch?.seriesAdWrapper?.matches?.map(
                      (matchInformation, index) => (
                        <div
                          key={index}
                          className="my-8 cursor-pointer"
                          onClick={() =>
                            handleMatchClick(matchInformation.matchInfo.matchId)
                          }
                        >
                          {/* Series name */}
                          <p className="text-base font-bold">
                            {seriesMatch.seriesAdWrapper.seriesName},{" "}
                            {matchInformation?.matchInfo.matchFormat}
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
                      )
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No recent matches available.</p>
      )}
    </div>
  );
};

export default MatchOverview;
