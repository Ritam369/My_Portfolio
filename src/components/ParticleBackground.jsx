import React, { useEffect, useState } from "react";
import { Particles } from "./ui/particles";
import { useTheme } from "../contexts/ThemeContext";

const ParticleBackground = () => {
  const { isDark } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Dark mode = white particles (#ffffff)
    // Light mode = dark particles (#000000 or a dark slate)
    setColor(isDark ? "#ffffff" : "#0f172a"); 
  }, [isDark]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticleBackground;