import React from "react";
import { Loader } from "../../assets/svg";

type LoaderProps = {
  color?: string;
};

const ComponentLoader: React.FC<LoaderProps> = ({ color }) => {
  return (
    // <div className="z-[99] relative flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center ">
        <Loader color={color} />
      </div>
    // </div>
  );
};

export default ComponentLoader;
