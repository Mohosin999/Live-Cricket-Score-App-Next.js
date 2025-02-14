import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Cricbuzz API URL (Replace with the actual endpoint)
    // const apiUrl = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live";
    const apiUrl =
      "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international";

    // RapidAPI headers (Replace with your actual API key)
    const response = await axios.get(apiUrl, {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch live matches" },
      { status: 500 }
    );
  }
}
