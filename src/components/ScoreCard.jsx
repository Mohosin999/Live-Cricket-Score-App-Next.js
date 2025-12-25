import React from "react";
import GoToTopButton from "./GoToTopButton";
import Wrapper from "./Wrapper";

const ScoreCard = ({ matchScores }) => {
  console.log("matchScores", matchScores);
  return (
    <Wrapper>
      <div>
        {/*
         * ============================================================
         *                     Basic Match Summary
         * ============================================================
         */}
        <div className="flex items-center justify-center px-4 py-2 mb-4">
          <div className="text-base font-semibold params">
            <p>
              {matchScores?.scorecard?.[0]?.batteamsname} -{" "}
              {matchScores?.scorecard?.[0]?.score} (
              {matchScores?.scorecard?.[0]?.overs} Overs)
            </p>
            {/* This section will show when second innings will be available */}
            {matchScores?.scorecard?.[1]?.score && (
              <p>
                {matchScores?.scorecard?.[1]?.batteamsname} -{" "}
                {matchScores?.scorecard?.[1]?.score} (
                {matchScores?.scorecard?.[1]?.overs} Overs)
              </p>
            )}
            {/* Match status` */}
            <p className="mt-2 lg:mt-4 text-sm font-normal text-blue-500">
              {matchScores?.status}
            </p>
          </div>
        </div>

        {/*
         * ============================================================
         *                      Match Scoreboard
         * ============================================================
         */}
        {matchScores?.scorecard?.map((matchScore, index) => (
          <div key={index}>
            {/* Innings Header - Proper Alignment */}
            <div className="flex justify-between items-center px-4 py-2 highlight-heading font-semibold">
              <span>{matchScore?.batteamname} Innings</span>
              <span>
                {matchScore?.score}-{matchScore?.wickets} ({matchScore?.overs}{" "}
                Overs)
              </span>
            </div>

            {/* Table for Batting Score */}
            <table className="w-full border-collapse">
              <thead className="highlight-sub-heading">
                <tr>
                  <th className="py-2 px-4 text-left">Batter</th>
                  <th className="py-2 px-2 text-center">R</th>
                  <th className="py-2 px-2 text-center">B</th>
                  <th className="py-2 px-2 text-center">4s</th>
                  <th className="py-2 px-2 text-center">6s</th>
                  <th className="py-2 px-2 text-center">SR</th>
                </tr>
              </thead>

              <tbody className="text-sm heading">
                {Object.values(matchScore?.batsman || {}).map(
                  (player, index) => (
                    <tr key={index} className="custom-border">
                      <td className="py-2 px-4 text-left">
                        <span className="font-semibold">{player.name}</span>
                        <br />
                        <span className="text-xs sub-heading">
                          {player.outdec}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-center">{player.runs}</td>
                      <td className="py-2 px-2 text-center">{player.balls}</td>
                      <td className="py-2 px-2 text-center">{player.fours}</td>
                      <td className="py-2 px-2 text-center">{player.sixes}</td>
                      <td className="py-2 px-2 text-center">
                        {player.strkrate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>

            {/* Extras & Total */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 text-sm">
              <p>
                Extras -{" "}
                <span>
                  <span className="font-semibold">
                    {matchScore?.extras?.total}
                  </span>{" "}
                  (b {matchScore?.extras?.byes}, lb{" "}
                  {matchScore?.extras?.legbyes}, w {matchScore?.extras?.wides},
                  nb {matchScore?.extras?.noballs}, p{" "}
                  {matchScore?.extras?.penalty})
                </span>
              </p>

              <p>
                Total -{" "}
                <span className="font-normal">
                  <span className="font-semibold">{matchScore?.score}</span> (
                  {matchScore?.wickets} wkts, {matchScore?.overs} Overs)
                </span>
              </p>
            </div>

            {/* Bowling Stats */}
            <table className="w-full border-collapse mt-4">
              <thead className="highlight-sub-heading">
                <tr>
                  <th className="py-2 px-4 text-left">Bowler</th>
                  <th className="py-2 px-2 text-center">O</th>
                  <th className="py-2 px-2 text-center">M</th>
                  <th className="py-2 px-2 text-center">R</th>
                  <th className="py-2 px-2 text-center">W</th>
                  {/* <th className="py-2 px-2 text-center">NB</th>
                  <th className="py-2 px-2 text-center">WD</th> */}
                  <th className="py-2 px-2 text-center">ECO</th>
                </tr>
              </thead>
              <tbody className="text-sm params">
                {Object.values(matchScore?.bowler || {}).map(
                  (bowler, index) => (
                    <tr key={index} className="custom-border">
                      <td className="py-2 px-4 text-left font-semibold">
                        {bowler.name}
                      </td>
                      <td className="py-2 px-2 text-center">{bowler.overs}</td>
                      <td className="py-2 px-2 text-center">
                        {bowler.maidens}
                      </td>
                      <td className="py-2 px-2 text-center">{bowler.runs}</td>
                      <td className="py-2 px-2 text-center">
                        {bowler.wickets}
                      </td>
                      {/* <td className="py-2 px-2 text-center">{bowler.no_balls}</td>
                    <td className="py-2 px-2 text-center">{bowler.wides}</td> */}
                      <td className="py-2 px-2 text-center">
                        {bowler.economy}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>

            <table className="w-full border-collapse mt-4 mb-6">
              <thead className="highlight-sub-heading">
                <tr>
                  <th className="py-2 px-4 text-left">Powerplays</th>
                  <th className="py-2 px-2 text-center">Overs</th>
                  <th className="py-2 px-2 text-center">Runs</th>
                </tr>
              </thead>
              <tbody className="text-sm params">
                <tr key={index}>
                  <td className="py-2 px-4 text-left font-semibold capitalize">
                    {matchScore?.pp?.powerplay[0]?.pptype}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {matchScore?.pp?.powerplay[0]?.ovrfrom}-
                    {matchScore?.pp?.powerplay[0]?.ovrto}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {matchScore?.pp?.powerplay[0]?.run}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <GoToTopButton />
    </Wrapper>
  );
};

export default ScoreCard;
