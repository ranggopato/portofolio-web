import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
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
          What I've Build
        </h1>
      </div>

      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-8">
        <ProjectItem
          title="Property Finder"
          backgroundImg={propertyImg}
          projectUrl="/property"
          tech="React JS"
        />
        <ProjectItem
          title="Crypto App"
          backgroundImg={cryptoImg}
          projectUrl="/crypto"
          tech="React JS"
        />
        <ProjectItem
          title="Netflix App"
          backgroundImg={netflixImg}
          projectUrl="/netflix"
          tech="React JS"
        />
        <ProjectItem
          title="Twitch UI"
          backgroundImg={twitchImg}
          projectUrl="/twitch"
          tech="Next JS"
        />
      </div>
    </div>
  );
};

export default Projects;
