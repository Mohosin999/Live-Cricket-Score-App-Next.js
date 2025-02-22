import React from "react";
import Image from "next/image";
import Img01 from "../../public/crick-img/01.jpg";
import Img02 from "../../public/crick-img/02.jpg";

const CricketArticles = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Article 1 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <Image
            src={Img01}
            alt="The Rise of T20 Cricket"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">The Rise of T20 Cricket</h2>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              T20 cricket has transformed the sport, introducing fast-paced
              matches that captivate audiences worldwide. Leagues like the
              Indian Premier League (IPL) and Big Bash League (BBL) have become
              global phenomena, attracting top players and millions of fans. The
              format emphasizes aggressive batting, innovative bowling, and
              thrilling finishes, making it a favorite among younger audiences.
            </p>
            <p className="text-gray-700">
              T20 has also paved the way for new cricketing nations to compete
              on the global stage, expanding the sport's reach. With its shorter
              duration and high entertainment value, T20 cricket continues to
              dominate the cricketing calendar.
            </p>
          </div>
        </div>
      </div>

      {/* Article 2 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <Image
            src={Img02}
            alt="The Art of Spin Bowling"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">The Art of Spin Bowling</h2>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              Spin bowling is one of the most skillful aspects of cricket,
              requiring precision, guile, and creativity. Legends like Shane
              Warne, Muttiah Muralitharan, and Anil Kumble have mastered the
              art, using variations like leg-spin, off-spin, and googlies to
              outwit batsmen. Spin bowlers thrive in conditions where the pitch
              offers turn and bounce, making them crucial in Test matches and
              subcontinental conditions.
            </p>
            <p className="text-gray-700">
              Modern spinners like Rashid Khan and Ravichandran Ashwin have
              added new dimensions to the craft, blending traditional techniques
              with innovative strategies. Spin bowling remains a cornerstone of
              cricket, often turning the tide of matches in favor of the bowling
              side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketArticles;
