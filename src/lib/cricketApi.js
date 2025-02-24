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

// import axios from "axios";
// import NodeCache from "node-cache";

// const cache = new NodeCache({ stdTTL: 300 }); // Cache expires in 5 minutes (increase from 1 min)
// const RETRY_DELAY = 2000; // 2-second delay between retries

// const cricketApi = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   headers: {
//     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
//     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
//   },
// });

// /**
//  * ===================================================================
//  *                  Helper function to fetch with cache & retries
//  * ===================================================================
//  */
// const fetchWithCache = async (key, url) => {
//   const cachedData = cache.get(key);
//   if (cachedData) return cachedData; // Return cached data if available

//   let attempts = 0;
//   while (attempts < 3) {
//     // Retry up to 3 times if 429 occurs
//     try {
//       const response = await cricketApi.get(url);
//       cache.set(key, response.data); // Store in cache
//       return response.data;
//     } catch (error) {
//       if (error.response?.status === 429) {
//         console.warn(
//           `Rate limit exceeded. Retrying in ${RETRY_DELAY / 1000} seconds...`
//         );
//         await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
//         attempts++;
//       } else {
//         console.error(`Error fetching data from ${url}:`, error);
//         throw error;
//       }
//     }
//   }

//   throw new Error("Max retries reached. Unable to fetch data.");
// };

// /**
//  * ===================================================================
//  *                      Fetch Live Matches
//  * ===================================================================
//  */
// export const getLiveMatches = () =>
//   fetchWithCache("live_matches", "/matches/v1/live");

// /**
//  * ===================================================================
//  *                    Fetch Recent Matches
//  * ===================================================================
//  */
// export const getRecentMatches = () =>
//   fetchWithCache("recent_matches", "/matches/v1/recent");

// /**
//  * ===================================================================
//  *               Fetch Matches Scorecard by MatchId
//  * ===================================================================
//  */
// export const getMatchesScorecard = (matchId) =>
//   fetchWithCache(`scorecard_${matchId}`, `/mcenter/v1/${matchId}/scard`);

// /**
//  * ===================================================================
//  *                      Fetch Series
//  * ===================================================================
//  */
// export const getSeries = () =>
//   fetchWithCache("series", "/series/v1/international");

// /**
//  * ===================================================================
//  *                  Get International News
//  * ===================================================================
//  */
// export const getInternationalNews = () =>
//   fetchWithCache("international_news", "/news/v1/index");

// /**
//  * ===================================================================
//  *                      Fetch Upcoming Matches
//  * ===================================================================
//  */
// export const getUpcomingInterantionalMatches = () =>
//   fetchWithCache("upcoming_international", "/schedule/v1/international");
// export const getUpcomingDomesticMatches = () =>
//   fetchWithCache("upcoming_domestic", "/schedule/v1/domestic");
// export const getUpcomingWomenMatches = () =>
//   fetchWithCache("upcoming_women", "/schedule/v1/women");
// export const getUpcomingLeagueMatches = () =>
//   fetchWithCache("upcoming_league", "/schedule/v1/league");
