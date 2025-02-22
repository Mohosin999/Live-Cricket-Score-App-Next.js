"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Loading from "./ui/Loading";
import NoMatchesAvailable from "./NoMatchesAvailable";

const MatchesList = ({ matches, routePath, loadingText, live = false }) => {
  const router = useRouter();

  const handleMatchClick = (matchId) => {
    router.push(`${routePath}/${matchId}`);
  };

  if (!matches) return <Loading text={loadingText} />;

  return (
    <div>
      {matches.length > 0 ? (
        <div
          className={`grid grid-cols-1 ${
            live ? "md:grid-cols-1" : "md:grid-cols-2"
          } gap-4 md:gap-6`}
        >
          {matches?.map((match) =>
            match?.seriesMatches
              ?.filter((seriesMatch) => seriesMatch?.seriesAdWrapper)
              .map((seriesMatch) =>
                seriesMatch?.seriesAdWrapper?.matches?.map(
                  (matchInformation, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, {
                      once: true,
                      margin: "-100px",
                    });

                    return (
                      <motion.div
                        ref={ref}
                        key={index}
                        className="card py-5 px-5 cursor-pointer"
                        onClick={() =>
                          handleMatchClick(matchInformation.matchInfo.matchId)
                        }
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <h3 className="heading text-base font-bold">
                          {seriesMatch.seriesAdWrapper.seriesName},{" "}
                          {matchInformation?.matchInfo.matchFormat}
                        </h3>

                        <p className="text-xs sub-heading">
                          {matchInformation.matchInfo.matchDesc} •{" "}
                          {matchInformation.matchInfo.venueInfo.city},{" "}
                          {matchInformation.matchInfo.venueInfo.ground}
                        </p>

                        {matchInformation?.matchScore?.team1Score?.inngs1 ? (
                          <div className="flex flex-col gap-1 items-center mt-3 mb-2">
                            <div className="teams-score">
                              <p>
                                {matchInformation.matchInfo?.team1?.teamName}
                              </p>
                              <p>
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.runs
                                }{" "}
                                /{" "}
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.wickets
                                }{" "}
                                (
                                {
                                  matchInformation?.matchScore?.team1Score
                                    ?.inngs1?.overs
                                }{" "}
                                Ov )
                              </p>
                            </div>

                            <div className="teams-score">
                              <p>
                                {matchInformation.matchInfo?.team2?.teamName}
                              </p>
                              {matchInformation?.matchScore?.team2Score
                                ?.inngs1 ? (
                                <p>
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.runs
                                  }{" "}
                                  /{" "}
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.wickets
                                  }{" "}
                                  (
                                  {
                                    matchInformation?.matchScore?.team2Score
                                      ?.inngs1?.overs
                                  }{" "}
                                  Ov )
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-500">Score not available</p>
                        )}

                        <p
                          className={`text-sm ${
                            matchInformation.matchInfo?.state === "Complete"
                              ? "text-blue-500"
                              : "text-red-500"
                          }`}
                        >
                          {matchInformation.matchInfo?.status}
                        </p>
                      </motion.div>
                    );
                  }
                )
              )
          )}
        </div>
      ) : (
        <NoMatchesAvailable title={"Matches not available"} />
      )}
    </div>
  );
};

export default MatchesList;
