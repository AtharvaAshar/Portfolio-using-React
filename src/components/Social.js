import React from "react";
import { social_links } from "../utils/constants";
const Social = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {social_links.map((link) => {
          const { id, child, href, style, download } = link;
          return (
            // eslint-disable-next-line
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
