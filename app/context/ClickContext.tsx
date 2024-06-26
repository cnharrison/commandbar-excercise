"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface ClickContextProps {
  clicks: number;
  clicksPerSecond: number;
  setClicks: (clicks: number) => void;
  setClicksPerSecond: (clicksPerSecond: number) => void;
}

const ClickContext = createContext<ClickContextProps>({
  clicks: 0,
  clicksPerSecond: 0,
  setClicks: () => {},
  setClicksPerSecond: () => {},
});

export const ClickProvider = ({ children }: { children: ReactNode }) => {
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);

  return (
    <ClickContext.Provider value={{ clicks, clicksPerSecond, setClicks, setClicksPerSecond }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickContext = () => useContext(ClickContext);