import axios from "axios";

const cricketApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
});

/**
 * ===================================================================
 *                      Fetch Live matches
 * ===================================================================
 */
export const getLiveMatches = async () => {
  try {
    const response = await cricketApi.get("/matches/v1/live");
    return response.data;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    throw error;
  }
};

/**
 * ===================================================================
 *                    Fetch Recent Matches
 * ===================================================================
 */
export const getRecentMatches = async () => {
  try {
    const response = await cricketApi.get("/matches/v1/recent");
    return response.data;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    throw error;
  }
};

/**
 * ===================================================================
 *               Fetch Matches Scorecard by MatchId
 * ===================================================================
 */
export const getMatchesScorecard = async (matchId) => {
  try {
    const response = await cricketApi.get(`/mcenter/v1/${matchId}/scard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    throw error;
  }
};

/**
 * ===================================================================
 *                      Fetch Upcoming Matches
 * ===================================================================
 */

// Fetch upcoming International matches
export const getUpcomingInterantionalMatches = async () => {
  try {
    const response = await cricketApi.get("schedule/v1/international");
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    throw error;
  }
};
