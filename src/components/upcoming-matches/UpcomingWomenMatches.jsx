"use client";

import { useEffect, useState } from "react";
import { getUpcomingWomenMatches } from "@/lib/cricketApi";
import Loading from "../ui/Loading";

const UpcomingWomenMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMatches = async () => {
      try {
        const data = await getUpcomingWomenMatches();

        const filteredMatches = data?.matchScheduleMap?.filter(
          (day) => day.scheduleAdWrapper
        );

        setMatches(filteredMatches);
      } catch (error) {
        console.error("Error fetching live matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingMatches();
  }, []);

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
      second: "2-digit",
    });

    // Format for user's local time
    const userLocalTime = matchStartDate.toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Detects user's timezone
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return { venueTime, userLocalTime };
  };

  if (loading) return <Loading text="Loading upcoming women matches..." />;

  return (
    <div className="p-4">
      {matches?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match, index) => {
            const matchInfo =
              match?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0];

            if (!matchInfo) return null; // Skip if matchInfo is missing

            const { startDate, venueInfo } = matchInfo;
            const { venueTime, userLocalTime } = formatMatchTime(
              startDate,
              venueInfo?.timezone
            );

            return (
              <div
                key={index}
                className="p-10 m-5 border border-blue-500 rounded-md"
              >
                {/* Match date */}
                <p>{match?.scheduleAdWrapper?.date}</p>

                <div className="my-5">
                  {/* Series Name */}
                  <p className="text-base font-bold">
                    {match?.scheduleAdWrapper?.matchScheduleList[0]?.seriesName}
                  </p>

                  {/* Match Info */}
                  <div>
                    {/* Match Title */}
                    <h3>
                      {matchInfo?.team1?.teamName} vs{" "}
                      {matchInfo?.team2?.teamName}, {matchInfo?.matchDesc}
                    </h3>

                    {/* Match Venue */}
                    <p>
                      {venueInfo?.ground} • {venueInfo?.city}
                    </p>
                  </div>

                  {/* Match Time */}
                  <div className="mt-2">
                    <p>
                      <strong>Venue Time:</strong> {venueTime}
                    </p>
                    <p>
                      <strong>Your Local Time:</strong> {userLocalTime}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-red-500">
          No update about upcoming matches.
        </p>
      )}
    </div>
  );
};

export default UpcomingWomenMatches;
