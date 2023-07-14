import React from "react";

import { projects } from "../utils/constants";
const Project = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b  w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:pb-15">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check Out Some of My Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({id,src,demo,code}) => {
                return (
                  <div
                    key={id}
                    className="shadow-md shadow-gray-600 rounded-lg"
                  >
                    <img
                      src={src}
                      alt="notFound"
                      className="rounded-md  duration-200 hover:scale-105 overflow-hidden h-60 "
                    />
                    <div className="flex items-center justify-center ">
                      <button
                        type="button"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 z-10"
                        onClick={() => window.open(demo, "_blank")}
                      >
                        Demo
                      </button>
                      <button
                        type="button"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 z-10"
                        onClick={() => window.open(code, "_blank")}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                );})
            }
        </div>
      </div>
    </div>
  );
};

export default Project;
