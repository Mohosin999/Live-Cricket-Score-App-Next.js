// import Wrapper from "@/components/Wrapper";

// const Home = async () => {
//   return (
//     <Wrapper>
//       <div className="py-4 grid grid-cols-4 gap-5">
//         {/* Live Matches Section */}
//         <div className="col-span-1">
//           <h2 className="text-lg font-semibold mb-2">Live Matches</h2>
//           <div className="space-y-4">
//             <div className="border h-20"></div>
//             <div className="border h-20"></div>
//             <div className="border h-20"></div>
//           </div>
//         </div>

//         <div className="col-span-1">
//           <h2 className="text-lg font-semibold mb-2">Series</h2>
//           <div className="space-y-4">
//             <div className="border h-20"></div>
//             <div className="border h-20"></div>
//             <div className="border h-20"></div>
//           </div>
//         </div>

//         {/* Latest News Section */}
//         <div className="col-span-2">
//           <h2 className="text-lg font-semibold text-center">
//             Latest News of Cricket
//           </h2>
//           <div className="py-4">
//             <h1 className="text-2xl font-bold">Heading</h1>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p className="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Home;

import LatestNews from "@/components/LatestNews";
import UpcomingSeries from "@/components/UpcomingSeries";
import Wrapper from "@/components/Wrapper";
import { getInternationalNews, getSeries } from "@/lib/cricketApi";

const Home = async () => {
  // const series = await getSeries();
  const internationNews = await getInternationalNews();
  console.log("series -> ", internationNews);

  return (
    <Wrapper>
      <div className="py-4 grid grid-cols-4 gap-5">
        {/* Live Matches Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">Live Matches</h2>
          <div className="space-y-4">
            <div className="border h-20"></div>
            <div className="border h-20"></div>
            <div className="border h-20"></div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">Upcoming Series</h2>
          <div className="space-y-4">
            {/* <UpcomingSeries series={series} /> */}
          </div>
        </div>

        {/* Latest News Section */}
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-center">
            Latest News of Cricket
          </h2>
          <div className="py-4">
            <LatestNews newsObj={internationNews} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
