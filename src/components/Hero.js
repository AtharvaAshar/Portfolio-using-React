import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am  a Web Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            possimus aliquid quam distinctio officia, recusandae harum aliquam
            dolorem ea autem inventore numquam? Molestiae natus iusto tempore et
            corporis temporibus.
          </p>
          <div className="animate-bounce">
            <Link to="projects"  smooth duration={300} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1 "/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
