import React from "react";
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className="header_fixed_image w-full h-screen object-cover bg-fixed relative">
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-56 h-56 lg:w-72 lg:h-72 border-8 border-gray-400 border-opacity-80"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white uppercase select-none font-roboto">
        <Link href="/">
          <a className="font-semibold text-1xl md:text-2xl hover:text-yellow-500 transition-all duration-300">
            home
          </a>
        </Link>
        <h1 className="pt-5 text-3xl md:text-5xl font-extrabold text-yellow-400">Projects</h1>
      </div>
    </div>
  );
}

export default Header;
