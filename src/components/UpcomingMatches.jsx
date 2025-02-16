// "use client";
// import PropTypes from "prop-types";
// import Loading from "./ui/Loading";

// /**
//  * UpcomingMatches Component
//  * A reusable component to display upcoming matches.
//  *
//  * @param {Object} props - The component props.
//  * @param {Function} props.matches - An array of match data.
//  * @returns {JSX.Element} - The rendered component.
//  */
// const UpcomingMatches = ({ matches }) => {
//   console.log("this is", matches);
//   // Helper function to convert match start time
//   const formatMatchTime = (timestamp, venueTimezone) => {
//     if (!timestamp) return "Unknown Time";

//     const matchStartDate = new Date(parseInt(timestamp));

//     // Format for match venue time
//     const venueTime = matchStartDate.toLocaleString("en-US", {
//       timeZone: venueTimezone,
//       weekday: "long",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//     // Format for user's local time
//     const userLocalTime = matchStartDate.toLocaleString("en-US", {
//       timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Detects user's timezone
//       weekday: "long",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//     return { venueTime, userLocalTime };
//   };

//   if (!matches) return <Loading text="Loading upcoming women matches..." />;

//   return (
//     <div>
//       {matches?.length > 0 ? (
//         <div>
//           {matches.map((match, index) => {
//             const matchInfo = match?.scheduleAdWrapper?.matchScheduleList?.map(
//               (item) => item?.matchInfo[0]
//             );

//             if (!matchInfo) return null;

//             const { startDate, venueInfo } = matchInfo[0];
//             const { venueTime, userLocalTime } = formatMatchTime(
//               startDate,
//               venueInfo?.timezone
//             );

//             return (
//               <div key={index} className="">
//                 {/* Match date */}
//                 <p className="text-base font-bold px-6 py-2 bg-gray-300">
//                   {match?.scheduleAdWrapper?.date}
//                 </p>

//                 <div className="px-6">
//                   {match?.scheduleAdWrapper?.matchScheduleList?.map(
//                     (schedule, index) => (
//                       <div
//                         key={index}
//                         className="border-b last:border-b-0 py-8"
//                       >
//                         {/* Series Name */}
//                         <p className="text-base font-bold">
//                           {schedule?.seriesName}
//                         </p>

//                         <div className="grid grid-cols-3 gap-4 items-center">
//                           {/* Match Title & Venue */}
//                           <div className="col-span-2 mt-1">
//                             <h3 className="text-sm mb-1">
//                               {schedule?.matchInfo[0]?.team1?.teamName} vs{" "}
//                               {schedule?.matchInfo[0]?.team2?.teamName},{" "}
//                               {schedule?.matchInfo[0]?.matchDesc}
//                             </h3>
//                             <p className="text-xs text-gray-600">
//                               {schedule?.matchInfo[0]?.venueInfo?.ground},{" "}
//                               {schedule?.matchInfo[0]?.venueInfo?.city}
//                             </p>
//                           </div>

//                           {/* Match Time */}
//                           <div className="text-right mt-1">
//                             <p className="text-sm mb-1">{venueTime}</p>
//                             <p className="text-xs text-gray-600">
//                               {userLocalTime} (Local Time)
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center text-red-500">
//           No update about upcoming matches.
//         </p>
//       )}
//     </div>
//   );
// };

// // PropTypes validation
// UpcomingMatches.propTypes = {
//   matches: PropTypes.array.isRequired,
// };

// export default UpcomingMatches;

"use client";
import PropTypes from "prop-types";
import Loading from "./ui/Loading";

/**
 * UpcomingMatches Component
 * A reusable component to display upcoming matches.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.matches - An array of match data.
 * @returns {JSX.Element} - The rendered component.
 */
const UpcomingMatches = ({ matches }) => {
  console.log("this is", matches);
  // Helper function to convert match start time
  const formatMatchTime = (timestamp, venueTimezone) => {
    if (!timestamp) return "Unknown Time";

    const matchStartDate = new Date(parseInt(timestamp));

    // Format for match venue time
    const venueTime = matchStartDate.toLocaleString("en-US", {
      timeZone: venueTimezone,
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Format for user's local time
    const userLocalTime = matchStartDate.toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Detects user's timezone
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    return { venueTime, userLocalTime };
  };

  if (!matches) return <Loading text="Loading upcoming women matches..." />;

  return (
    <div>
      {matches?.length > 0 ? (
        <div>
          {matches.map((match, index) => (
            <div key={index}>
              {/* Match date */}
              <p className="text-base font-bold px-6 py-2 bg-gray-300">
                {match?.scheduleAdWrapper?.date}
              </p>

              <div className="px-6">
                {match?.scheduleAdWrapper?.matchScheduleList?.map(
                  (scheduleMatches, index) => (
                    <div key={index} className="border-b last:border-b-0 py-8">
                      {/* Series Name */}
                      <p className="text-base font-bold">
                        {scheduleMatches?.seriesName}
                      </p>

                      {scheduleMatches?.matchInfo?.map(
                        (scheduleMatch, index) => {
                          /**
                           * formateMatchTime() Function
                           * Call the function to get match time
                           */
                          const { venueTime, userLocalTime } = formatMatchTime(
                            scheduleMatch?.startDate,
                            scheduleMatch?.venueInfo?.timezone
                          );

                          return (
                            <div key={index}>
                              <div className="grid grid-cols-3 gap-4 items-center">
                                {/* Match Title & Venue */}
                                <div className="col-span-2 mt-1">
                                  <h3 className="text-sm mb-1">
                                    {scheduleMatch?.team1?.teamName} vs{" "}
                                    {scheduleMatch?.team2?.teamName},{" "}
                                    {scheduleMatch?.matchDesc}
                                  </h3>
                                  <p className="text-xs text-gray-600">
                                    {scheduleMatch?.venueInfo?.ground},{" "}
                                    {scheduleMatch?.venueInfo?.city}
                                  </p>
                                </div>

                                {/* Match Time */}
                                <div className="text-right mt-1">
                                  <p className="text-sm mb-1">{venueTime}</p>
                                  <p className="text-xs text-gray-600">
                                    {userLocalTime} (Local Time)
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">
          No update about upcoming matches.
        </p>
      )}
    </div>
  );
};

// PropTypes validation
UpcomingMatches.propTypes = {
  matches: PropTypes.array.isRequired,
};

export default UpcomingMatches;
