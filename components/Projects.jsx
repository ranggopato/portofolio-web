import Image from "next/image";
import Link from "next/link";
import React from "react";

import projectunsplash2 from "../public/assets/projects/project-unsplash2.jpg";
import projectunsplash3 from "../public/assets/projects/project-unsplash3.jpg";
import projectunsplash4 from "../public/assets/projects/project-unsplash4.jpg";
import projectunsplash5 from "../public/assets/projects/project-unsplash5.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="flex items-center m-4">
        <div className="flex-grow h-[4px] bg-cokelat"></div>

        <span className="flex-shrink text-2xl text-cokelat hover:bg-navbar border-b-8 border-navbar border-opacity-40 uppercase px-4 font-ibm ease-in-out duration-300 ">
          Projects
        </span>

        <div className="flex-grow h-[4px] bg-cokelat"></div>
      </div>
      <div className="px-4 flex flex-col md:px-10">
        <h1 className="text-blacky text-2xl font-ibm font-bold">
          What I have Build
        </h1>
      </div>

      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-8">
        <ProjectItem
          title="Book Finder"
          backgroundImg={projectunsplash5}
          projectUrl="/"
          tech="React JS"
        />
        <ProjectItem
          title="Car Finder"
          backgroundImg={projectunsplash2}
          projectUrl="/"
          tech="React JS"
        />
        <ProjectItem
          title="Coffe shop"
          backgroundImg={projectunsplash3}
          projectUrl="/"
          tech="React JS"
        />
        <ProjectItem
          title="Pet Finder"
          backgroundImg={projectunsplash4}
          projectUrl="/"
          tech="Next JS"
        />
      </div>
    </div>
  );
};

export default Projects;
