"use client";
import Link from "next/link";
import { useClickContext } from "../context/ClickContext";
import { Almendra_Display } from "next/font/google";
import AsciiSpinner from "../components/AsciiSpinner";

const font = Almendra_Display({
  weight: "400",
  subsets: ["latin"]
});

const StatsPage = () => {
  const { clicks, clicksPerSecond } = useClickContext();

  const averageClicksPerMinute = clicksPerSecond !== 0 ? (clicks / (clicksPerSecond / 60)).toFixed(2) : "0";

  const isLoading = clicks === 0 || clicksPerSecond === 0 || averageClicksPerMinute === "Infinity";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className={`${font.className} text-pink-500 text-9xl`}>
          Click Stats
        </h1>
        <div className="mt-4">
          <p>
            Total Clicks: {clicks === 0 ? <AsciiSpinner /> : clicks}
          </p>
          <p>
            Clicks Per Second: {clicksPerSecond === 0 ? <AsciiSpinner /> : clicksPerSecond}
          </p>
          <p>
            Average Clicks Per Minute: {isLoading ? <AsciiSpinner /> : averageClicksPerMinute}
          </p>
        </div>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 underline">
            Back to Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;