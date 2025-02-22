"use client";
import PropTypes from "prop-types";
import Loading from "./ui/Loading";
import GoToTopButton from "./GoToTopButton";

/**
 * UpcomingMatches Component
 * A reusable component to display upcoming matches.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.matches - An object of match data.
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
              <h3 className="text-base font-bold px-6 py-2 heading bg-gray-400 dark:bg-gray-800">
                {match?.scheduleAdWrapper?.date}
              </h3>

              <div className="px-6">
                {match?.scheduleAdWrapper?.matchScheduleList?.map(
                  (scheduleMatches, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-500 last:border-b-0 py-8"
                    >
                      {/* Series Name */}
                      <h3 className="text-base font-bold heading">
                        {scheduleMatches?.seriesName}
                      </h3>

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
                                  <p className="text-sm mb-1 params">
                                    {scheduleMatch?.team1?.teamName} vs{" "}
                                    {scheduleMatch?.team2?.teamName},{" "}
                                    {scheduleMatch?.matchDesc}
                                  </p>
                                  <p className="text-xs sub-heading">
                                    {scheduleMatch?.venueInfo?.ground},{" "}
                                    {scheduleMatch?.venueInfo?.city}
                                  </p>
                                </div>

                                {/* Match Time */}
                                <div className="text-right mt-1">
                                  <p className="text-sm mb-1 params">
                                    {userLocalTime}
                                  </p>
                                  <p className="text-xs sub-heading">
                                    {venueTime} (Local Time)
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

      <GoToTopButton />
    </div>
  );
};

// PropTypes validation
UpcomingMatches.propTypes = {
  matches: PropTypes.object.isRequired,
};

export default UpcomingMatches;
