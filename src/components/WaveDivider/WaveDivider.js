// components/WaveDivider.js
import React from "react";

const WaveDivider = ({ 
  color = "#0d1117", 
  flip = false, 
  showLine = true, 
  lineColor = "#e1e4e8",
  lineWidth = "1px"
}) => {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0 }}>
      {/* Line above the wave */}
      {showLine && (
        <div 
          style={{
            height: lineWidth,
            backgroundColor: lineColor,
            width: "100%",
            marginBottom: flip ? "0" : "-1px", // Slight overlap to connect with wave
            marginTop: flip ? "-1px" : "0"
          }}
        />
      )}
      
      {/* Wave SVG */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          height: "100px",
          width: "100%",
          transform: flip ? "rotate(180deg)" : "none",
        }}
      >
        <path
          fill={color}
          d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,106.7C672,96,768,96,864,101.3C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;