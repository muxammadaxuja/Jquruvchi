import React, { useState } from "react";
import {
  FaTelegram,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaFacebookSquare,
} from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import { IoLogoWhatsapp } from "react-icons/io";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <div
          onClick={() => setOpen(!open)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-400 fixed bottom-24 right-10 sm:right-14 flex items-center justify-center cursor-pointer group"
        >
        <span className="animate-ping absolute inline-flex h-4/5 w-4/5 rounded-full bg-[#fb2b06] opacity-75"></span>
      <IconButton>
          <SiGooglemessages className="text-white text-lg hover:text-lg md:text-xl transition-all duration-500 relative" />
      </IconButton>
          <span className="toolipt">Xabarlashmoq</span>
        </div>
      <div className={open ? "contact-tg" : "contact-tg none"}>
        <div className="w-full bg-yellow-400 p-3 flex space-x-2">
          <FaTelegramPlane className="text-3xl text-white mx-2" />
          <div className="space-y-1">
            <h1 className="text-[14px] font-semibold text-white">
              Ijtimoiy tarmoqlar orqali yozish.
            </h1>
            <p className="text-[10px] text-white">
              O'zingizni qiziqtirgan barcha savolga javob olishingiz mumkin.
            </p>
          </div>
        </div>
        <h1 className="p-3 text-[10px] font-light text-[#252525]">
          Javob bir necha daqiqada qaytariladi.
        </h1>
        <Fade bottom>
          <div className="p-3 cursor-pointer">
            <div className="border-l flex justify-between items-center border-[#2da7db] p-4 bg-[#f5f7f9] hover:bg-white rounded-md">
              <div className="flex">
                <FaTelegram className="text-[#2da7db] mr-4 text-2xl" />
                <p className="text-[#252525] font-light">Telegram</p>
              </div>
              <FaTelegramPlane className="text-[#2da7db] " />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="p-3 cursor-pointer">
            <div className="border-l flex justify-between items-center border-[#cb2e75] p-4 bg-[#f5f7f9] hover:bg-white rounded-md">
              <div className="flex">
                <img
                  src="images/instagram.png"
                  className="w-5 h-5  mr-4 text-2xl"
                />
                <p className="text-[#252525] font-light">Instagram</p>
              </div>
              <FaInstagram className="text-[#cb2e75] " />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="p-3 cursor-pointer">
            <div className="border-l flex justify-between items-center border-[#3b599a] p-4 bg-[#f5f7f9] hover:bg-white rounded-md">
              <div className="flex">
                <FaFacebookSquare className="text-[#3b599a] mr-4 text-2xl" />
                <p className="text-[#252525] font-light">Facebook</p>
              </div>
              <FaFacebookF className="text-[#3b599a] " />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="p-3 cursor-pointer">
            <div className="border-l flex justify-between items-center border-[#2db742] p-4 bg-[#f5f7f9] hover:bg-white rounded-md">
              <div className="flex">
                <IoLogoWhatsapp className="text-[#2db742] mr-4 text-2xl" />
                <p className="text-[#252525] font-light">Whatsapp</p>
              </div>
              <AiOutlineWhatsApp className="text-[#2db742] " />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
