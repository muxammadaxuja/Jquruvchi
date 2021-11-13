import React from "react";
import { footerItem } from "./Data";
import { MdCall } from "react-icons/md";
import { BsFacebook, BsTelegram, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className=" pt-8 pb-6 px-5 bg-[#252525] text-gray-400 mt-10">
      <div className="flex items-center justify-around">
        <div className="space-y-2 font-medium pb-3">
          <img src="/images/logowhite.png" className="w-32" alt="footer logo" />
          <p>Uzbekiston, Jizzax shahar, Toshkent ko'cha, 1A uy</p>
          <p>j-quruvchi@mail.ru</p>
          <div className="flex text-white hover:text-yellow-500 text-sm lg:text-lg transition-all duration-300 font-normal">
            <MdCall className="animate-ping text-lg mr-2" />{" "}
            <h2>+998 72 223 28 76 | 7/24</h2>{" "}
          </div>
        </div>
        <div>
          <nav className="md:block hidden">
            <ul className="flex">
              {footerItem.map((item) => (
                <li className="mx-4 font-medium">
                  <a href="#!" key={item.id}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center mx-4 space-y-4 sm:flex-row justify-between pt-6">
            <BsTelegram className="text-3xl mr-2 mt-4 hover:text-[#2da7db] text-white cursor-pointer transition-all duration-300" />
            <BsInstagram className="text-3xl mr-2 hover:text-[#d44965] text-white cursor-pointer transition-all duration-300" />
            <BsFacebook className="text-3xl mr-2 hover:text-[#4167b1] text-white cursor-pointer transition-all duration-300" />
          </div>
        </div>
      </div>
      <p className="text-center mt-2 mx-1 lg:mx-5 border-t border-gray-600 pt-4">
        <a href="#!" className="animate-pulse text-yellow-500">
          TeamIt coders
        </a>
        , 2021 © Barcha huquqlar himoyalangan.
      </p>
    </div>
  );
}

export default Footer;
