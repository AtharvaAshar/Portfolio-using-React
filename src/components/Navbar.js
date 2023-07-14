import React, { useState } from "react";
import {Link} from "react-scroll"
import { links } from "../utils/constants";
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
  const [nav,setNav]=useState(false)
  return (
    <nav className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4" name="nav">
      <div className="nav-logo">
        <Link to="nav" className="curor-pointer">
          <h1 className="font-signature ml-2 text-5xl">Atharva Ashar</h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => {
          const { url, id } = link;
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize  text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={url} smooth duration={400}>{url}</Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-500">
          {links.map((link) => {
            const { url, id } = link;
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-gray-500 hover:scale-105 duration-200 text-4xl"
              >
                <Link to={url} smooth duration={400} onClick={()=>setNav(!nav)}>
                  {url}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
