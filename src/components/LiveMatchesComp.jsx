// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useRouter } from "next/navigation"; // Import useRouter
// import Loading from "./ui/Loading";
// import NoMatchesAvailable from "./NoMatchesAvailable";

// const LiveMatchesComp = ({ matches }) => {
//   const router = useRouter();

//   /**S
//    * Handles the click event for a match.
//    * Navigates to the scoreboard page for the selected match.
//    *
//    * @param {string} matchId - The unique ID of the match.
//    */
//   const handleMatchClick = (matchId) => {
//     router.push(`/live-matches/${matchId}`);
//   };

//   if (!matches) return <Loading text="Loading live matches..." />;

//   return (
//     <div>
//       {matches.length > 0 ? (
//         <div className={`grid grid-cols-1 gap-10`}>
//           {matches?.map((match) =>
//             match?.seriesMatches
//               ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
//               .map((seriesMatch) =>
//                 seriesMatch?.seriesAdWrapper?.matches?.map(
//                   (matchInformation, index) => {
//                     const ref = useRef(null);
//                     const isInView = useInView(ref, {
//                       once: true,
//                       margin: "-100px",
//                     });

//                     return (
//                       <motion.div
//                         ref={ref}
//                         key={index}
//                         className="py-3 px-3 shadow-lg cursor-pointer"
//                         onClick={() =>
//                           handleMatchClick(matchInformation.matchInfo.matchId)
//                         }
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={isInView ? { y: 0, opacity: 1 } : {}}
//                         transition={{ duration: 0.5 }}
//                       >
//                         {/* Series name */}
//                         <h3 className="text-gray-700 text-base font-bold">
//                           {seriesMatch.seriesAdWrapper.seriesName},{" "}
//                           {matchInformation?.matchInfo.matchFormat}
//                         </h3>
//                         {/* Location */}
//                         <p className="text-xs text-gray-500">
//                           {matchInformation.matchInfo.matchDesc} •{" "}
//                           {matchInformation.matchInfo.venueInfo.city},{" "}
//                           {matchInformation.matchInfo.venueInfo.ground}
//                         </p>

//                         {matchInformation?.matchScore?.team1Score?.inngs1 ? (
//                           <div className="flex flex-col gap-1 items-center mt-3 mb-2">
//                             {/* First Innings */}
//                             <div className="text-gray-700 w-full flex items-center justify-between text-sm">
//                               <p>
//                                 {matchInformation.matchInfo?.team1?.teamName}
//                               </p>
//                               <p>
//                                 {
//                                   matchInformation?.matchScore?.team1Score
//                                     ?.inngs1?.runs
//                                 }{" "}
//                                 /{" "}
//                                 {
//                                   matchInformation?.matchScore?.team1Score
//                                     ?.inngs1?.wickets
//                                 }{" "}
//                                 (
//                                 {
//                                   matchInformation?.matchScore?.team1Score
//                                     ?.inngs1?.overs
//                                 }{" "}
//                                 Ov )
//                               </p>
//                             </div>

//                             {/* Second Innings */}
//                             <div className="text-gray-700 w-full flex items-center justify-between text-sm">
//                               <p>
//                                 {matchInformation.matchInfo?.team2?.teamName}
//                               </p>
//                               {matchInformation?.matchScore?.team2Score
//                                 ?.inngs1 ? (
//                                 <p>
//                                   {
//                                     matchInformation?.matchScore?.team2Score
//                                       ?.inngs1?.runs
//                                   }{" "}
//                                   /{" "}
//                                   {
//                                     matchInformation?.matchScore?.team2Score
//                                       ?.inngs1?.wickets
//                                   }{" "}
//                                   (
//                                   {
//                                     matchInformation?.matchScore?.team2Score
//                                       ?.inngs1?.overs
//                                   }{" "}
//                                   Ov )
//                                 </p>
//                               ) : (
//                                 ""
//                               )}
//                             </div>
//                           </div>
//                         ) : (
//                           <p className="text-gray-500">Score not available</p>
//                         )}

//                         {/* Final result and who won */}
//                         <p
//                           className={`text-sm ${
//                             matchInformation.matchInfo?.state === "Complete"
//                               ? "text-green-600"
//                               : "text-red-600"
//                           }`}
//                         >
//                           {matchInformation.matchInfo?.status}
//                         </p>
//                       </motion.div>
//                     );
//                   }
//                 )
//               )
//           )}
//         </div>
//       ) : (
//         <NoMatchesAvailable title="No live matches available at this moment!" />
//       )}
//     </div>
//   );
// };

// export default LiveMatchesComp;

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter
import Loading from "./ui/Loading";
import NoMatchesAvailable from "./NoMatchesAvailable";

const LiveMatchesComp = ({ matches }) => {
  const router = useRouter();

  /**S
   * Handles the click event for a match.
   * Navigates to the scoreboard page for the selected match.
   *
   * @param {string} matchId - The unique ID of the match.
   */
  const handleMatchClick = (matchId) => {
    router.push(`/live-matches/${matchId}`);
  };

  if (!matches) return <Loading text="Loading live matches..." />;

  return (
    <div>
      {matches.length > 0 ? (
        <div className={`grid grid-cols-1 gap-10`}>
          {matches?.map((match) =>
            match?.seriesMatches
              ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
              .map((seriesMatch) =>
                seriesMatch?.seriesAdWrapper?.matches?.map(
                  (matchInformation, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, {
                      once: true,
                      margin: "-100px",
                    });

                    // Determine the animation based on the index
                    let initialAnimation = {};
                    if (index % 3 === 0) {
                      // First item comes from the bottom
                      initialAnimation = { y: 50, opacity: 0 };
                    } else if (index % 3 === 1) {
                      // Second item comes from the left
                      initialAnimation = { x: -50, opacity: 0 };
                    } else if (index % 3 === 2) {
                      // Third item comes from the right
                      initialAnimation = { x: 50, opacity: 0 };
                    }

                    return (
                      <motion.div
                        ref={ref}
                        key={index}
                        className="py-3 px-3 shadow-lg cursor-pointer"
                        onClick={() =>
                          handleMatchClick(matchInformation.matchInfo.matchId)
                        }
                        initial={initialAnimation}
                        animate={isInView ? { y: 0, x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Series name */}
                        <h3 className="text-gray-700 text-base font-bold">
                          {seriesMatch.seriesAdWrapper.seriesName},{" "}
                          {matchInformation?.matchInfo.matchFormat}
                        </h3>
                        {/* Location */}
                        <p className="text-xs text-gray-500">
                          {matchInformation.matchInfo.matchDesc} •{" "}
                          {matchInformation.matchInfo.venueInfo.city},{" "}
                          {matchInformation.matchInfo.venueInfo.ground}
                        </p>

                        {matchInformation?.matchScore?.team1Score?.inngs1 ? (
                          <div className="flex flex-col gap-1 items-center mt-3 mb-2">
                            {/* First Innings */}
                            <div className="text-gray-700 w-full flex items-center justify-between text-sm">
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
                                }{" "}
                                Ov )
                              </p>
                            </div>

                            {/* Second Innings */}
                            <div className="text-gray-700 w-full flex items-center justify-between text-sm">
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
                                  }{" "}
                                  Ov )
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
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {matchInformation.matchInfo?.status}
                        </p>
                      </motion.div>
                    );
                  }
                )
              )
          )}
        </div>
      ) : (
        <NoMatchesAvailable title="No live matches available at this moment!" />
      )}
    </div>
  );
};

export default LiveMatchesComp;
