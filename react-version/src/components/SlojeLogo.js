import React from "react";

const SlojeLogo = ({ height = 30, color = "#ff5e1a" }) => {
  return (
    <svg
      height={height}
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* S - Properly oriented geometric S */}
      <path
        d="M50 10H10V30H50V50H10"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* L */}
      <path
        d="M65 10V50H95"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* O - Rounded Rect for cleaner feel */}
      <rect
        x="110"
        y="10"
        width="40"
        height="40"
        rx="2"
        stroke={color}
        strokeWidth="6"
      />
      {/* J - Improved hook */}
      <path
        d="M165 10H195V50H165V42"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* E - Distinct bars */}
      <path
        d="M260 10H215V50H260M215 30H245"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default SlojeLogo;
