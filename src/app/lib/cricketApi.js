import axios from "axios";

const cricketApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
});

// Fetch live matches
export const getLiveMatches = async () => {
  try {
    const response = await cricketApi.get("/matches/v1/live");
    return response.data;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    throw error;
  }
};

// Fetch upcoming matches
export const getUpcomingMatches = async () => {
  try {
    const response = await cricketApi.get("schedule/v1/international");
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    throw error;
  }
};
