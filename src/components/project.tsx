import React from "react";

interface ProjectProps {
  imageSrc: string;
  component: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ imageSrc, component }) => {
  return (
    <div className="flex justify-center items-center md:w-[80%] min-h-dvh mx-auto my-4 max-md:flex-col">
      <div className="w-1/2 max-md:w-full p-4">
        <img src={imageSrc} className="w-full h-auto" alt=""></img>
      </div>
      <div className="w-1/2 max-md:w-full p-4">{component}</div>
    </div>
  );
};

export default Project;
