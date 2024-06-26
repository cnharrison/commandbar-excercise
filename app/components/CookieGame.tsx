"use client";
import Image from "next/image";
import Link from "next/link";
import ClickEffect from "./ClickEffect";
import { useEffect, useRef, useState } from "react";
import { Almendra_Display } from "next/font/google";
import { useClickContext } from "../context/ClickContext";

const font = Almendra_Display({
  weight: "400",
  subsets: ["latin"]
});

const CookieGame = () => {
  const { clicks, setClicks, clicksPerSecond, setClicksPerSecond } = useClickContext();
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [currentSecondClicks, setCurrentSecondClicks] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setClicks((prevClicks) => prevClicks + 1);
    setCurrentSecondClicks((prevClicks) => prevClicks + 1);
    setClickPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleClicksPerSecond = () => {
      setClicksPerSecond(currentSecondClicks);
      setCurrentSecondClicks(0);
    };

    intervalRef.current = setInterval(handleClicksPerSecond, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSecondClicks]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className={`${font.className} text-pink-500 text-9xl`}>
          Cookie Clicking Game
        </h1>
        <div className="flex justify-center">
          <Image
            src="/cookie.png"
            alt="Cookie"
            width={500}
            height={500}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
          {clickPosition.x !== 0 && clickPosition.y !== 0 && (
            <ClickEffect x={clickPosition.x} y={clickPosition.y} />
          )}
        </div>
        <div>
          <h2>Total Clicks: {clicks}</h2>
          <h2>Clicks Per Second: {clicksPerSecond}</h2>
        </div>
        <div className="mt-4">
          <Link href="/stats" className="text-blue-500 underline">
            View Stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieGame;