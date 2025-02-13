import LiveScores from "./components/LiveScores";
import UpcomingMatches from "./components/UpcomingMatches";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <LiveScores />
      <UpcomingMatches />
    </div>
  );
}
