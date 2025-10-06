import React from "react";
import { Loader } from "../../assets/svg";

type LoaderProps = {
  color?: string;
};

const ComponentLoader: React.FC<LoaderProps> = ({ color="#106EBE" }) => {
  return (
      <div className="h-full w-full flex items-center justify-center ">
        <Loader color={color} />
      </div>
  );
};

export default ComponentLoader;
