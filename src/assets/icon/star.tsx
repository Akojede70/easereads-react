export const Star = () => {
  return (
       <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.5001 4.375L14.073 12.775L5.01672 13.4458L11.9584 19.3083L9.78547 28.1167L17.5001 23.3333M17.5001 4.375L20.9271 12.775L29.9834 13.4458L23.0417 19.3083L25.2146 28.1167L17.5001 23.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
  )
}

// export default star
import React from "react";

interface StarProps {
  fill: "full" | "half" | "none";
}

export const Stars: React.FC<StarProps> = ({ fill }) => {
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

// export default Star;
