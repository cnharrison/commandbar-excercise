"use client";
import { useState, useEffect } from "react";

interface ClickEffectProps {
  x: number;
  y: number;
}

const ClickEffect = ({ x, y }: ClickEffectProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [x, y]);

  return visible ? (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        fontSize: "1.5rem",
        color: "#ff00ff",
        textShadow: "0 0 2px #000, 0 0 5px #000",
        animation: "fadeInOut 0.5s ease-in-out",
        pointerEvents: "none", 
      }}
    >
      +1
    </div>
  ) : null;
};

export default ClickEffect;