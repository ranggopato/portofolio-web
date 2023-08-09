import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="w-full pt-[100px] md:pt-[180px]">
      <div className="flex items-center m-4">
        <div className="flex-grow h-[4px] bg-cokelat"></div>

        <span className="flex-shrink text-2xl text-cokelat hover:bg-navbar border-b-8 border-navbar border-opacity-40 uppercase px-4 font-ibm ease-in-out duration-300 ">
          Resume
        </span>

        <div className="flex-grow h-[4px] bg-cokelat"></div>
      </div>
      <div className="max-w-[1200px] mx-auto p-2 ">
        <div className="bg-cokelat my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-navbar font-ibm text-2xl uppercase">
            Ranggo Pato
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ranggo-pato-676435192/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                className="text-navbar text-xl"
                size={20}
                style={{ marginRight: '1rem' }}
              />
            </a>
            <a
              href="https://github.com/ranggopato"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                className="text-navbar text-xl"
                style={{ marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Full Stack Developer <span className="px-1">|</span> Web
              Development <span className="px-1">|</span> Data Scientist
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Full Stack Developer</p>
            <p className="py-2">Web Development</p>
            <p>Data Scientist</p>
          </div>
        </div>
        <p>
          An experienced as a full stack developer with various programming
          skills that can be developed further with strong passion to learn new
          things fastly. Highly skilled in communication, collaboration and
          technical documentation. Proficient in SQL, React, NextJS, Golang,
          CSS, HTML and strong understanding of Vue, Angular, NodeJS, Python.
          Currently I am interested and learning about mobile developer
        </p>

        {/* Skills */}
        <div className="text-center p-4">
          <h5 className="text-center font-bold underline text-[18px] uppercase py-2">
            Skills
          </h5>
          <p className="p-2">
            <div className="font-bold">Full Stack Engineer</div>
            <span className="px-2"></span>Golang
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>Flask
            <span className="px-2">|</span>JavaScript
            <span className="px-2">
              <br />
            </span>
            React
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">
              <br />
            </span>{' '}
            Node (Express Framework)
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> Angular
            <span className="px-2">|</span> VueJS
          </p>
          <p className="p-2">
            <div className="font-bold">Data Analyst</div>
            <span className="px-2"></span>Python
            <span className="px-2">|</span>Numpy
            <span className="px-2">|</span>Pandas
            <span className="px-2">|</span>Seaborn
            <span className="px-2">
              <br />
            </span>
            Exploratory Data Analyst
            <span className="px-2">|</span>Tableu
            <span className="px-2">|</span>Google Data Studio
          </p>
          <p className="p-2">
            <div className="font-bold">Data Scientist</div>
            <span className="px-2"></span>Python
            <span className="px-2">|</span>Numpy
            <span className="px-2">|</span>Pandas
            <span className="px-2">
              <br />
            </span>
            Seaborn
            <span className="px-2">|</span>Regresion
            <span className="px-2">|</span>Classification
            <span className="px-2">
              <br />
            </span>
            Clustering
            <span className="px-2">|</span>Machine Learning Method and Tools
          </p>
        </div>

        <h5 className="text-center font-bold underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">KMNC Klinik</span>
            <span className="px-2">|</span>Freelance
          </p>
          <p className="py-1 italic">
            FRONT-END ENGINEER (June 2023 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Developed and built CMS website from figma using Angular</li>
            <li>Fixed Angular and styling bug</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Haioo Indonesia (Telkom Indonesia)
            </span>
            <span className="px-2">|</span>Transvision Tebet, Jakarta
          </p>
          <p className="py-1 italic">
            BACK END ENGINEER (February 2023 - July 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Developed and built feature for Haioo app</li>
            <li>Developed and built CMS</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              PT Sharing Vision Indonesia
            </span>
            <span className="px-2">|</span>Bank Rakyat Indonesia (BRI) Sudirman,
            Jakarta
          </p>
          <p className="py-1 italic">
            FULL STACK ENGINEER (February 2022 - December 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built and developed a microservice using golang to consume data
              from kafka
            </li>
            <li>Made message broker and data model using kafka</li>
            <li>
              Produced and connected kafka topics with microservices using
              golang
            </li>
            <li>
              Consumed data from a kafka topic to PostgreSQL using kafka connect
            </li>
            <li>
              Provide data for development needs using cloudera data science
              work bench (pyspark and postgre)
            </li>
            <li>
              Used SQL queries to pull data from multiple databases to provide
              development data
            </li>
            <li>
              Implemented an enhanced GRPC service (create, read, delete,
              update) using golang
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Kreasi Handal Selaras Group Project
            </span>
            <span className="px-2">|</span>Freelance
          </p>
          <p className="py-1 italic">
            FRONT-END ENGINEER (Oktober 2022 - February 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Developed responsive website from figma using NextJs</li>
            <li>
              Successfully built a responsive website that is compatible with
              all devices
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">PT Indonesia Power UP</span>
            <span className="px-2">|</span>Bali
          </p>
          <p className="py-1 italic">
            STUDENT INTERN OF INSTRUMENT ENGINEERING (July - August, 2019)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Learn about wastegate valve as a part of turbocharger system and
              maintenance wastegate and I/P transducer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
