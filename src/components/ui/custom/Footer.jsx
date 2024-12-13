import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    
      <div className="min-w-full mx-auto flex justify-center items-center p-5 lg:px-20 lg:py-10 bg-gray-800 text-white mt-20 rounded-t-3xl">
        <div className="flex space-x-4">
          <a
            href="mailto:nanakobby2002@gmail.com"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <HiOutlineMail size={24} color="#03C988" />
          </a>
          <a
            href="https://twitter.com/kay_dev24"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaXTwitter size={24} color="#03C988" />
          </a>
          <a
            href="https://www.linkedin.com/in/justice-duah-7ab6b4239/"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={24} color="#03C988" />
          </a>
          <a
            href="https://wa.me/0547099317"
            target="_blank"
            className="hover:text-gray-400 transition"
          >
            <IoLogoWhatsapp size={24} color="#03C988" />
          </a>
        </div>
      </div>
    
  );
}

export default Footer;
