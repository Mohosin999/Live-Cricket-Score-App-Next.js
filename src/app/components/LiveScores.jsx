// "use client";

// import { useEffect, useState } from "react";
// import { getLiveMatches } from "../lib/cricketApi";

// const LiveScores = () => {
//   const [matches, setMatches] = useState([]);
//   const [title, setTitle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLiveMatches = async () => {
//       try {
//         const data = await getLiveMatches();
//         console.log("Live Data -> ", data);

//         const liveMatches =
//           data?.typeMatches?.[0]?.seriesMatches
//             ?.flatMap((series) => series.seriesAdWrapper?.matches || [])
//             .filter((match) => match?.matchInfo) || [];

//         setMatches(liveMatches);
//         setTitle(data?.appIndex?.seoTitle);
//       } catch (error) {
//         console.error("Error fetching live matches:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLiveMatches();
//   }, []);

//   if (loading)
//     return <p className="text-center text-gray-500">Loading live scores...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
//       {matches.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {matches.map((match, index) => {
//             const matchInfo = match?.matchInfo;
//             const team1Score = match?.matchScore?.team1Score?.inngs1;
//             const team2Score = match?.matchScore?.team2Score?.inngs1;

//             return (
//               <div
//                 key={matchInfo.matchId || index}
//                 className="bg-white shadow-sm p-4 rounded-md border"
//               >
//                 <h3 className="text-lg font-semibold">
//                   {matchInfo.seriesName}
//                 </h3>
//                 <p className="text-xs text-gray-600">
//                   {matchInfo.matchDesc} • {matchInfo.venueInfo.city},{" "}
//                   {matchInfo.venueInfo.ground}
//                 </p>

//                 {team1Score ? (
//                   <div className="flex flex-col gap-1 items-center mt-3 mb-2">
//                     {/* First Innings */}
//                     <div className="w-full flex items-center justify-between">
//                       <p>{matchInfo?.team1?.teamName}</p>
//                       <p>
//                         {team1Score.runs} / {team1Score.wickets} (
//                         {team1Score.overs})
//                       </p>
//                     </div>

//                     {/* Second Innings */}

//                     <div className="w-full flex items-center justify-between">
//                       <p>{matchInfo?.team2?.teamName}</p>
//                       {team2Score ? (
//                         <p>
//                           {team2Score.runs} / {team2Score.wickets} (
//                           {team2Score.overs})
//                         </p>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-gray-500">Score not available</p>
//                 )}

//                 {/* Final result and who won */}

//                 <p
//                   className={`text-sm ${
//                     matchInfo?.state === "Complete"
//                       ? "text-blue-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {matchInfo?.status}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-red-500">No live matches available.</p>
//       )}
//     </div>
//   );
// };

// export default LiveScores;

"use client";

import { useEffect, useState } from "react";
import { getLiveMatches } from "../lib/cricketApi";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        const data = await getLiveMatches();
        console.log("Live Data -> ", data);

        const liveMatches = data?.typeMatches;

        console.log("Hey Akash all data -> ", liveMatches);

        setMatches(liveMatches);
        setTitle(data?.appIndex?.seoTitle);
      } catch (error) {
        console.error("Error fetching live matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading live scores...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
      {matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match, index) => {
            const matchType = match?.matchType;

            return (
              <div key={index} className="bg-white p-4 w-[70%]">
                {match?.seriesMatches
                  ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
                  .map((seriesMatch, index) => {
                    const matchInformation =
                      seriesMatch.seriesAdWrapper.matches[0];

                    return (
                      <div key={index} className="mb-10">
                        {/* Series name */}
                        <h3 className="text-lg font-semibold">
                          {seriesMatch.seriesAdWrapper.seriesName}
                        </h3>
                        {/* Location */}
                        <p className="text-xs text-gray-600">
                          {matchInformation.matchInfo.matchDesc} •{" "}
                          {matchInformation.matchInfo.venueInfo.city},{" "}
                          {matchInformation.matchInfo.venueInfo.ground}
                        </p>

                        {matchInformation?.matchScore?.team1Score?.inngs1 ? (
                          <div className="flex flex-col gap-1 items-center mt-3 mb-2">
                            {/* First Innings */}
                            <div className="w-full flex items-center justify-between">
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

                            <div className="w-full flex items-center justify-between">
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
        <p className="text-center text-red-500">No live matches available.</p>
      )}
    </div>
  );
};

export default LiveScores;
