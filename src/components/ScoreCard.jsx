import React from "react";
import Wrapper from "./Wrapper";
import GoToTopButton from "./GoToTopButton";

const ScoreCard = ({ matchScores }) => {
  return (
    <Wrapper>
      <div>
        {/*
         * ============================================================
         *                     Basic Match Summary
         * ============================================================
         */}
        <div className="flex items-center justify-between px-4 py-2 mb-4">
          <div className="text-base font-semibold params">
            <p>
              {matchScores?.scoreCard?.[0]?.batTeamDetails?.batTeamShortName} -{" "}
              {matchScores?.scoreCard?.[0]?.scoreDetails?.runs} (
              {matchScores?.scoreCard?.[0]?.scoreDetails?.overs} Overs)
            </p>
            {/* This section will show when second innings will be available */}
            {matchScores?.scoreCard?.[1]?.scoreDetails?.runs && (
              <p>
                {matchScores?.scoreCard?.[1]?.batTeamDetails?.batTeamShortName}{" "}
                - {matchScores?.scoreCard?.[1]?.scoreDetails?.runs} (
                {matchScores?.scoreCard?.[1]?.scoreDetails?.overs} Overs)
              </p>
            )}
            {/* Match status` */}
            <p className="mt-4 text-sm font-normal text-blue-500">
              {matchScores?.status}
            </p>
          </div>
          {/* After completing the match, this will be visible */}
          {matchScores?.matchHeader?.state === "Complete" && (
            <div className="text-sm">
              {/* Player of the match */}
              <div className="mb-2">
                <p className="sub-heading">Player of the Match</p>
                <p className="params">
                  {matchScores?.matchHeader?.playersOfTheMatch?.[0]?.fullName}
                </p>
              </div>
              {/* Player of the series if available */}
              <div>
                {matchScores?.matchHeader?.playersOfTheSeries?.[0] && (
                  <div>
                    <p className="sub-heading">Player of the Series</p>
                    <p className="params">
                      {
                        matchScores?.matchHeader?.playersOfTheSeries?.[0]
                          ?.fullName
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/*
         * ============================================================
         *                      Match Scoreboard
         * ============================================================
         */}
        {matchScores?.scoreCard?.map((matchScore, index) => (
          <div key={index}>
            {/* Innings Header - Proper Alignment */}
            <div className="flex justify-between items-center px-4 py-2 highlight-heading font-semibold">
              <span>{matchScore?.batTeamDetails?.batTeamName} Innings</span>
              <span>
                {matchScore?.scoreDetails?.runs}-
                {matchScore?.scoreDetails?.wickets} (
                {matchScore?.scoreDetails?.overs} Overs)
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
                {Object.values(
                  matchScore?.batTeamDetails?.batsmenData || {}
                ).map((player, index) => (
                  <tr key={index} className="custom-border">
                    <td className="py-2 px-4 text-left">
                      <span className="font-semibold">{player.batName}</span>
                      <br />
                      <span className="text-xs sub-heading">
                        {player.outDesc}
                      </span>
                    </td>
                    <td className="py-2 px-2 text-center">{player.runs}</td>
                    <td className="py-2 px-2 text-center">{player.balls}</td>
                    <td className="py-2 px-2 text-center">{player.fours}</td>
                    <td className="py-2 px-2 text-center">{player.sixes}</td>
                    <td className="py-2 px-2 text-center">
                      {player.strikeRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Extras & Total */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 text-sm">
              <p>
                Extras -{" "}
                <span>
                  <span className="font-semibold">
                    {matchScore?.extrasData?.total}
                  </span>{" "}
                  (b {matchScore?.extrasData?.byes}, lb{" "}
                  {matchScore?.extrasData?.legByes}, w{" "}
                  {matchScore?.extrasData?.wides}, nb{" "}
                  {matchScore?.extrasData?.noBalls}, p{" "}
                  {matchScore?.extrasData?.penalty})
                </span>
              </p>

              <p>
                Total -{" "}
                <span className="font-normal">
                  <span className="font-semibold">
                    {matchScore?.scoreDetails?.runs}
                  </span>{" "}
                  ({matchScore?.scoreDetails?.wickets} wkts,{" "}
                  {matchScore?.scoreDetails?.overs} Overs)
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
                  <th className="py-2 px-2 text-center">NB</th>
                  <th className="py-2 px-2 text-center">WD</th>
                  <th className="py-2 px-2 text-center">ECO</th>
                </tr>
              </thead>
              <tbody className="text-sm params">
                {Object.values(
                  matchScore?.bowlTeamDetails?.bowlersData || {}
                ).map((bowler, index) => (
                  <tr key={index} className="custom-border">
                    <td className="py-2 px-4 text-left font-semibold">
                      {bowler.bowlName}
                    </td>
                    <td className="py-2 px-2 text-center">{bowler.overs}</td>
                    <td className="py-2 px-2 text-center">{bowler.maidens}</td>
                    <td className="py-2 px-2 text-center">{bowler.runs}</td>
                    <td className="py-2 px-2 text-center">{bowler.wickets}</td>
                    <td className="py-2 px-2 text-center">{bowler.no_balls}</td>
                    <td className="py-2 px-2 text-center">{bowler.wides}</td>
                    <td className="py-2 px-2 text-center">{bowler.economy}</td>
                  </tr>
                ))}
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
                    {matchScore?.ppData?.pp_1?.ppType}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {matchScore?.ppData?.pp_1?.ppOversFrom}-
                    {matchScore?.ppData?.pp_1?.ppOversTo}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {matchScore?.ppData?.pp_1?.runsScored}
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
