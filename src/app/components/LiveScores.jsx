"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Matches ----> ", matches);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cricketLive");
        console.log("Fetch Response -> ", response);

        const liveMatches =
          response?.data?.typeMatches?.[0]?.seriesMatches
            ?.flatMap((series) => series.seriesAdWrapper?.matches || [])
            .filter((match) => match?.matchInfo) || [];

        setMatches(liveMatches);
        setTitle(response?.data?.appIndex?.seoTitle);
      } catch (error) {
        console.error("Error fetching live matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading live scores...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
      {matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match, index) => {
            const matchInfo = match?.matchInfo;
            const team1Score = match?.matchScore?.team1Score?.inngs1;
            const team2Score = match?.matchScore?.team2Score?.inngs1;

            return (
              <div
                key={matchInfo.matchId || index}
                className="bg-white shadow-sm p-4 rounded-md border"
              >
                <h3 className="text-lg font-semibold">
                  {matchInfo.seriesName}
                </h3>
                <p className="text-xs text-gray-600">
                  {matchInfo.matchDesc} • {matchInfo.venueInfo.city},{" "}
                  {matchInfo.venueInfo.ground}
                </p>

                {team1Score ? (
                  <div className="flex flex-col gap-1 items-center mt-3 mb-2">
                    {/* First Innings */}
                    <div className="w-full flex items-center justify-between">
                      <p>{matchInfo?.team1?.teamName}</p>
                      <p>
                        {team1Score.runs} / {team1Score.wickets} (
                        {team1Score.overs})
                      </p>
                    </div>

                    {/* Second Innings */}
                    {team2Score ? (
                      <div className="w-full flex items-center justify-between">
                        <p>{matchInfo?.team2?.teamName}</p>
                        <p>
                          {team2Score.runs} / {team1Score.wickets} (
                          {team1Score.overs})
                        </p>
                      </div>
                    ) : (
                      <p>Not Yet to Bat</p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500">Score not available</p>
                )}

                {/* Final result and who won */}
                {matchInfo?.state === "Complete" ? (
                  <p className="text-sm text-blue-600">{matchInfo?.status}</p>
                ) : (
                  <p className="text-sm text-blue-600">{matchInfo?.state}</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-red-500">No live matches available.</p>
      )}
    </div>
  );
};

export default LiveScores;
