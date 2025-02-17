// import PropTypes from "prop-types";
// import Loading from "./ui/Loading";
// import { getNewsImg } from "@/lib/cricketApi";

// /**
//  * UpcomingMatches Component
//  * A reusable component to display upcoming matches.
//  *
//  * @param {Object} props - The component props.
//  * @param {Function} props.newsObj - An object of match data.
//  * @returns {JSX.Element} - The rendered component.
//  */
// const LatestNews = async ({ newsObj }) => {
//   // const imgUrl = await getNewsImg()
//   if (!newsObj) return <Loading text="Loading upcoming women matches..." />;

//   return (
//     <div>
//       {newsObj?.storyList?.length > 0 ? (
//         <div>
//           {newsObj?.storyList
//             ?.filter((filteredNews) => filteredNews?.story)
//             .map((newsList, index) => (
//               <div key={index} className="border-b last:border-b-0 py-3">
//                 <p>{newsList?.story?.imageId}</p>
//                 {/* Series Name */}
//                 <p className="text-sm font-bold">
//                   {newsList?.story?.seoHeadline}
//                 </p>
//                 <p className="text-xs mt-1">{newsList?.story?.intro}</p>
//               </div>
//             ))}
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
// LatestNews.propTypes = {
//   newsObj: PropTypes.object.isRequired,
// };

"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "./ui/Loading";
import { getNewsImg } from "@/lib/cricketApi";
import Image from "next/image";

export default function LatestNews({ newsObj }) {
  const [imageUrls, setImageUrls] = useState({});
  const [error, setError] = useState(false);
  const FALLBACK_IMAGE = "/fallback-news.jpg";

  useEffect(() => {
    const fetchImages = async () => {
      if (!newsObj?.storyList) return;
      setError(false);

      const imagePromises = newsObj.storyList
        .filter((news) => news?.story)
        .map(async (newsItem) => {
          const imageId = newsItem?.story?.imageId;
          if (imageId) {
            try {
              const imageData = await getNewsImg(imageId);
              const blob = new Blob([imageData], { type: "image/jpeg" });
              const url = URL.createObjectURL(blob);
              return { [imageId]: url };
            } catch (err) {
              console.error(`Error fetching image ${imageId}:`, err);
              return { [imageId]: FALLBACK_IMAGE };
            }
          }
          return null;
        });

      try {
        const resolvedImages = await Promise.all(imagePromises);
        const imageMap = resolvedImages.reduce(
          (acc, item) => ({ ...acc, ...item }),
          {}
        );
        setImageUrls(imageMap);
      } catch (err) {
        setError(true);
      }
    };

    fetchImages();
  }, [newsObj]);

  if (!newsObj) return <Loading text="Loading latest news..." />;
  if (error)
    return (
      <p className="text-center text-red-500">
        ⚠️ Unable to fetch images. Please try again later.
      </p>
    );

  return (
    <div>
      {newsObj?.storyList?.length > 0 ? (
        <div>
          {newsObj?.storyList
            ?.filter((news) => news?.story)
            .map((newsItem, index) => {
              const imageId = newsItem?.story?.imageId;
              return (
                <div key={index} className="border-b last:border-b-0 py-3">
                  <Image
                    src={imageUrls[imageId] || FALLBACK_IMAGE}
                    alt="News Image"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="text-sm font-bold">
                    {newsItem?.story?.seoHeadline}
                  </p>
                  <p className="text-xs mt-1">{newsItem?.story?.intro}</p>
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
}

LatestNews.propTypes = {
  newsObj: PropTypes.object.isRequired,
};
