import PropTypes from "prop-types";
import Loading from "./ui/Loading";
import Image from "next/image";
import CricketImg from "../../public/cricket.jpg";

/**
 * Convert timestamp to relative time (e.g., "2 hours ago").
 * @param {number} timestamp - The timestamp in milliseconds.
 * @returns {string} - Relative time string.
 */
const getRelativeTime = (timestamp) => {
  const now = Date.now();
  const diffInSeconds = Math.floor((now - timestamp) / 1000);

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "week", seconds: 604800 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

/**
 * LatestNews Component
 * A reusable component to display latest news.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.newsObj - An object containing match news.
 * @returns {JSX.Element} - The rendered component.
 */
const LatestNews = async ({ newsObj }) => {
  if (!newsObj) return <Loading text="Loading upcoming women matches..." />;

  return (
    <div>
      {newsObj?.storyList?.length > 0 ? (
        <div>
          {newsObj?.storyList
            ?.filter((filteredNews) => filteredNews?.story)
            .map((newsList, index) => {
              const { seoHeadline, intro, pubTime } = newsList.story;
              return (
                <div key={index} className="pb-6">
                  {/* Image */}
                  <Image
                    src={CricketImg}
                    alt="Cricket News"
                    width={0}
                    height={0}
                    quality={100}
                    className="w-full h-auto"
                  />
                  {/* Series Name */}
                  <h3 className="text-base font-bold mt-2">{seoHeadline}</h3>
                  <p className="text-sm mt-1">{intro}</p>
                  {/* Time Ago */}
                  {pubTime && (
                    <p className="text-xs text-gray-500 mt-1">
                      {getRelativeTime(parseInt(pubTime, 10))}
                    </p>
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

// PropTypes validation
LatestNews.propTypes = {
  newsObj: PropTypes.object.isRequired,
};

export default LatestNews;
