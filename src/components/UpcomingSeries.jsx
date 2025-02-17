"use client";
import PropTypes from "prop-types";
import Loading from "./ui/Loading";

/**
 * UpcomingMatches Component
 * A reusable component to display upcoming matches.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.series - An object of match data.
 * @returns {JSX.Element} - The rendered component.
 */
const UpcomingSeries = ({ series }) => {
  /**
   * Converts a Unix timestamp in milliseconds to a human-readable date string.
   *
   * @param {string} timestampMs - The Unix timestamp in milliseconds.
   * @returns {string} The formatted date string.
   */
  function convertTimestamp(timestampMs) {
    const date = new Date(Number(timestampMs));
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  }

  if (!series) return <Loading text="Loading upcoming women matches..." />;

  return (
    <div>
      {series?.seriesMapProto?.length > 0 ? (
        <div>
          {series?.seriesMapProto?.map((seriesList, index) => (
            <div key={index}>
              <div>
                {seriesList?.series?.map((singleSeries, index) => (
                  <div key={index} className="py-3 px-3 shadow-md mb-6">
                    {/* Series Name */}
                    <h3 className="text-gray-700 text-sm font-bold">
                      {singleSeries?.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {convertTimestamp(singleSeries?.startDt)} -{" "}
                      {convertTimestamp(singleSeries?.endDt)}
                    </p>
                  </div>
                ))}
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
UpcomingSeries.propTypes = {
  series: PropTypes.object.isRequired,
};

export default UpcomingSeries;
