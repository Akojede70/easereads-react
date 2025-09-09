import React from "react";

interface StarProps {
  fill: "full" | "half" | "none";
}

const Star: React.FC<StarProps> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2"
    >
      <defs>
        <clipPath id="halfStarClip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17.5 14.14 18.64 21 12 17.77 5.36 21 6.5 14.14 2 9.27 8.91 8.26 12 2"
        fill="#FFD700"
        clipPath={fill === "half" ? "url(#halfStarClip)" : undefined}
        style={{ fill: fill === "none" ? "#d3d3d3" : "#FFD700" }}
      />
    </svg>
  );
};

export default Star;