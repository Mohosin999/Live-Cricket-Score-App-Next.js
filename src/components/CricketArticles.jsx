"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img01 from "../../public/crick-img/01.jpg";
import Img02 from "../../public/crick-img/02.jpg";
import Img03 from "../../public/crick-img/03.jpg";
import Img04 from "../../public/crick-img/04.jpg";

const articles = [
  {
    id: 1,
    title: "The Rise of T20 Cricket: A Global Phenomenon",
    image: Img01,
    content: [
      "T20 cricket has revolutionized the sport, introducing a fast-paced, high-octane format that has captivated audiences worldwide. Since its inception in 2003, the T20 format has grown exponentially, with leagues like the Indian Premier League (IPL), Big Bash League (BBL), and Caribbean Premier League (CPL) becoming household names. These leagues have not only attracted the best players from around the globe but have also created a platform for young talent to showcase their skills on an international stage.",
      "The success of T20 cricket lies in its ability to condense the excitement of a full-day match into just three hours. The format emphasizes aggressive batting, innovative bowling, and electrifying fielding, making it a perfect fit for modern audiences with shorter attention spans. The introduction of strategic timeouts, powerplays, and super overs has added layers of complexity and drama to the game, ensuring that every match is a spectacle.",
      "One of the most significant impacts of T20 cricket has been its role in globalizing the sport. Countries like Afghanistan, Nepal, and the UAE have embraced the format, using it as a stepping stone to gain recognition in the cricketing world. The ICC T20 World Cup has become one of the most anticipated events in the cricketing calendar, with nations competing fiercely for the coveted trophy.",
      "However, the rise of T20 cricket has also sparked debates about its impact on traditional formats like Test cricket. Critics argue that the focus on T20 leagues has led to a decline in the importance of Test matches, with players prioritizing franchise cricket over national duties. Despite these concerns, T20 cricket continues to thrive, attracting new fans and generating unprecedented revenue for the sport.",
      "Looking ahead, the future of T20 cricket seems brighter than ever. With innovations like women's T20 leagues, hybrid tournaments, and the integration of technology, the format is poised to dominate the cricketing landscape for years to come. As the game evolves, T20 cricket will remain at the forefront, redefining how the sport is played and consumed.",
    ],
  },
  {
    id: 2,
    title: "The Art of Spin Bowling: Mastering the Craft",
    image: Img02,
    content: [
      "Spin bowling is one of the most intricate and skillful aspects of cricket, requiring a blend of precision, guile, and creativity. Unlike fast bowling, which relies on raw pace and bounce, spin bowling is all about deception and variation. Legends like Shane Warne, Muttiah Muralitharan, and Anil Kumble have elevated the art to new heights, using their mastery of leg-spin, off-spin, and googlies to outfox batsmen and dominate matches.",
      "The success of a spin bowler often depends on their ability to read the pitch and adapt their strategy accordingly. In subcontinental conditions, where pitches tend to be dry and offer significant turn, spinners play a pivotal role in shaping the outcome of matches. The use of flight, drift, and subtle changes in pace can make even the most experienced batsmen look clueless.",
      "In recent years, modern spinners like Rashid Khan, Ravichandran Ashwin, and Nathan Lyon have taken the craft to new levels. Rashid Khan, for instance, has revolutionized leg-spin with his quick arm action and deadly googlies, while Ashwin has introduced new variations like the carrom ball to keep batsmen guessing. These players have proven that spin bowling is not just about turning the ball but also about outthinking the opponent.",
      "The role of spinners in limited-overs cricket has also evolved significantly. In T20s, spinners are often used in the middle overs to control the run rate and pick up crucial wickets. Their ability to bowl tight lines and lengths, combined with their variations, makes them invaluable assets to any team.",
      "Despite the challenges posed by flat pitches and aggressive batting, spin bowling remains a cornerstone of cricket. As the game continues to evolve, spinners will need to innovate and adapt to stay ahead of the curve. Whether it's through new variations, improved fitness, or better use of technology, the art of spin bowling will continue to thrive in the modern era.",
    ],
  },
  {
    id: 3,
    title: "The Evolution of Batting Techniques: From Grace to Power",
    image: Img03,
    content: [
      "Batting in cricket has undergone a dramatic transformation over the years, evolving from a focus on grace and technique to an emphasis on power and aggression. The advent of T20 cricket has accelerated this shift, with batsmen now expected to score at a rapid pace and clear the boundaries with ease. Players like Chris Gayle, AB de Villiers, and Virat Kohli have redefined what it means to be a modern batsman, blending traditional skills with innovative shot-making.",
      "One of the most significant changes in batting has been the rise of power-hitting. Batsmen now train specifically to increase their strength and bat speed, allowing them to hit sixes with remarkable consistency. Shots like the scoop, ramp, and switch-hit have become commonplace, adding a new dimension to the game. The use of heavier bats and improved fitness levels has also contributed to this trend.",
      "However, the importance of traditional batting skills cannot be overlooked. In Test cricket, where patience and technique are paramount, batsmen like Steve Smith and Kane Williamson have shown that classical strokeplay still has a place in the modern game. Their ability to adapt to different formats and conditions is a testament to their skill and versatility.",
      "Technology has also played a crucial role in the evolution of batting. Tools like Hawk-Eye and ball-tracking have provided batsmen with detailed insights into their performance, helping them identify weaknesses and improve their shot selection. The use of video analysis and data analytics has further enhanced their ability to prepare for specific bowlers and conditions.",
      "As the game continues to evolve, the role of the batsman will remain central to the success of any team. Whether it's through power-hitting in T20s or patient accumulation in Tests, batsmen will need to adapt to the demands of the modern game. The future of batting promises to be an exciting blend of tradition and innovation, with new stars emerging to push the boundaries of what is possible.",
    ],
  },
  {
    id: 4,
    title: "The Role of Technology in Cricket: A Game-Changer",
    image: Img04,
    content: [
      "Technology has transformed cricket in ways that were unimaginable a few decades ago. From decision-making to player performance analysis, the integration of technology has enhanced the accuracy, fairness, and entertainment value of the game. Tools like the Decision Review System (DRS), Hawk-Eye, and Snickometer have become integral to modern cricket, ensuring that crucial decisions are made with precision and reducing the margin for human error.",
      "One of the most significant advancements has been the introduction of the DRS. This system allows teams to challenge on-field decisions, using ball-tracking technology and ultra-motion cameras to determine the correct outcome. While the DRS has been met with some controversy, it has undoubtedly improved the accuracy of umpiring and added an extra layer of strategy to the game.",
      "Beyond decision-making, technology has also revolutionized player performance analysis. Wearable devices and data analytics are now used to monitor player fitness, track performance metrics, and optimize training regimes. Teams can analyze every aspect of a player's game, from their batting stance to their bowling action, and make data-driven decisions to improve their performance.",
      "The use of technology has also enhanced the viewing experience for fans. Innovations like Spidercam, ultra-motion replays, and augmented reality graphics have brought fans closer to the action, providing them with a deeper understanding of the game. Social media and streaming platforms have further expanded the reach of cricket, making it more accessible to a global audience.",
      "As technology continues to evolve, its role in cricket will only grow. From AI-powered coaching tools to virtual reality training simulations, the possibilities are endless. While some purists may argue that technology detracts from the human element of the game, there is no denying its impact on the sport. Cricket is now faster, fairer, and more exciting than ever, thanks to the integration of cutting-edge technology.",
    ],
  },
];

const CricketArticles = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({
      ...prev,
      // By one click id will set, and by another click id will unset
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="card overflow-hidden">
          <div className="relative h-48 hover:scale-105 transition-transform duration-300">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            {/* Title */}
            <h2 className="text-xl font-bold mb-4 heading">{article.title}</h2>

            {/* Content */}
            <div className="space-y-4 text-[15px] params">
              {article.content.slice(0, 1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {/* Next article will be shown if there is an id in showMore state */}
              {showMore[article.id] &&
                article.content
                  .slice(1)
                  .map((paragraph, index) => (
                    <p key={index + 1}>{paragraph}</p>
                  ))}
              <button
                onClick={() => toggleShowMore(article.id)}
                className="text-blue-500 hover:text-red-500 font-semibold cursor-pointer"
              >
                {showMore[article.id] ? "See less" : "See more..."}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CricketArticles;
