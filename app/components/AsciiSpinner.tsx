"use client";
import { useEffect, useState } from "react";

const spinnerChars = ['/', '-', '\\', '|'];

const AsciiSpinner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % spinnerChars.length);
    }, 250); 

    return () => clearInterval(interval);
  }, []);

  return <span>{spinnerChars[index]}</span>;
};

export default AsciiSpinner;