import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import calcProject from '../public/assets/projects/calc-project.png';
import freelancerProject from '../public/assets/projects/freelance-project.png';
import recipeProject from '../public/assets/projects/recipe-project.png';
import youtubeClone from '../public/assets/projects/youtube-clone.png';
import SliderImage from '../public/assets/projects/slider-image.png';
import RestApi from '../public/assets/projects/rest-api.png';

import ProjectItem from './ProjectItem';

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
          title="Youtube Clone"
          backgroundImg={youtubeClone}
          projectUrl="https://youtube-clone-ranggo.netlify.app"
          tech="React JS"
        />
        <ProjectItem
          title="Freelancer-App"
          backgroundImg={freelancerProject}
          projectUrl="https://freelancerappbyranggo.netlify.app"
          tech="Vue,Vuex and FireBase"
        />
        <ProjectItem
          title="Recipes Project"
          backgroundImg={recipeProject}
          projectUrl="https://recipebyranggo.netlify.app"
          tech="Angular and FireBase"
        />
        <ProjectItem
          title="Rest-API"
          backgroundImg={RestApi}
          projectUrl="https://node-express-api.up.railway.app/"
          tech="Node, Express, and MongoDb"
        />
        <ProjectItem
          title="Calculator Project"
          backgroundImg={calcProject}
          projectUrl="https://calculatorbyranggo.netlify.app"
          tech="React JS"
        />
        <ProjectItem
          title="Slider Image"
          backgroundImg={SliderImage}
          projectUrl="https://imagesliderbyranggo.netlify.app"
          tech="React JS"
        />
      </div>
    </div>
  );
};

export default Projects;
