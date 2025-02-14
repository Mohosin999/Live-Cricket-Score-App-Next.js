"use client";

import { useEffect, useState } from "react";
import { getUpcomingMatches } from "../lib/cricketApi";

const UpcomingMatches = () => {
  const [matches, setMatches] = useState([]);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Upcoming akahs -> ", matches);

  useEffect(() => {
    const fetchUpcomingMatches = async () => {
      try {
        const data = await getUpcomingMatches();

        const filteredMatches = data?.matchScheduleMap
          ?.slice(0, 7)
          .filter((day) => day.scheduleAdWrapper);

        setMatches(filteredMatches);
        setTitle(data?.appIndex?.seoTitle);
      } catch (error) {
        console.error("Error fetching live matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingMatches();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading live scores...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
      {matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match, index) => {
            const matchDate = match?.scheduleAdWrapper?.date;

            return (
              <div
                key={index}
                className="p-10 m-5 border border-blue-500 rounded-l-md"
              >
                <p>{matchDate}</p>
                {match?.scheduleAdWrapper?.matchScheduleList?.map(
                  (schedule, index) => (
                    <div key={index} className="my-5 mb-5">
                      <p className="text-base font-bold">
                        Series Name: {schedule?.seriesName}
                      </p>

                      {schedule?.matchInfo?.map((matchInf, index) => (
                        <div key={index}>
                          <p>Match Format: {matchInf?.matchFormat}</p>
                          <p>
                            Venue: {matchInf?.venueInfo?.ground} •{" "}
                            {matchInf?.venueInfo?.city},{" "}
                            {matchInf?.venueInfo?.country}
                          </p>
                          <h3>
                            {matchInf?.team1?.teamName} vs{" "}
                            {matchInf?.team2?.teamName}
                          </h3>
                        </div>
                      ))}
                    </div>
                  )
                )}
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

export default UpcomingMatches;
