import React, { useState } from "react";
import { sidebarItem } from "./Data";

function Sidebar({ isOpen, setOpen }) {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <div className="p-7">
        <a href="/">
          <img
            className="w-32 -mt-7 -ml-1 lg:ml-7 lg:mt-[2px] flex items-center justify-center"
            src="/images/logowhite.png"
            alt="logo"
          />
        </a>
      </div>
      <ul>
        {sidebarItem.map((item) => (
          <li className="hover:bg-gray-400 hover:bg-opacity-30 border-r-4 border-transparent hover:border-r-4 hover:border-white text-white uppercase text-md font-medium py-4">
            <a href={item.path} key={item.id} className={item.class}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
