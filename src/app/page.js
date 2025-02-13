import LiveScores from "./components/LiveScores";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Cricket Live Scores
      </h1>
      <LiveScores />
    </div>
  );
}

// import axios from "axios";
// import React from "react";

// const Home = async () => {
//   const data = await fetch("./liveScore.json");
//   console.log(data.json());

//   return <div>Home</div>;
// };

// export default Home;
