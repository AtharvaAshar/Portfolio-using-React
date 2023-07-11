import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import comfy from "../images/comfysloth.png"
import jobster from "../images/jobster.png"
import githubUser from "../images/githubUser.png"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/javascript.png"
import react from "../images/react.png"
import node from "../images/node.png"
import python from "../images/python.png"
import django from "../images/django.png"
export const links = [
  {
    id: 1,
    
    url: "home",
  },
  {
    id: 2,
    url: "about",
  },
  {
    id: 3,
    url: "projects",
  },
  {
    id: 4,
    url: "skills",
  },
];
export const social_links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/atharva-ashar/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/AtharvaAshar",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:atharvavashar5@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
export const projects = [
  {
    id: 1,
    src: comfy,
    demo: "https://comfysloth-atharva.netlify.app/",
    code: "https://github.com/AtharvaAshar/react-comfy-sloth",
  },
  {
    id: 2,
    src: jobster,
    demo: "https://jobster-atharva.netlify.app/",
    code: "https://github.com/AtharvaAshar/Jobster-React",
  },
  {
    id: 3,
    src: githubUser,
    demo: "https://githubuser-atharva.netlify.app/",
    code: "https://github.com/AtharvaAshar/githubUserProject",
  },
];

export const skills = [
  {
    id: 1,
    src: html,
    title: "html",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "css",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "javascript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "react",
    style: "shadow-blue-700",
  },
  {
    id: 5,
    src: node,
    title: "node",
    style: "shadow-green-300",
  },
  {
    id: 6,
    src: python,
    title: "python",
    style: "shadow-green-400",
  },
  {
    id: 7,
    src: django,
    title: "django",
    style: "shadow-green-800",
  },
];