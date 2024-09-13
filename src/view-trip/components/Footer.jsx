import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer className=" py-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left ml-2 flex flex-row gap-5">
          <h2 className="text-sm text-gray-400">👨🏾‍💻 ツ</h2>
          <p className="text-gray-400 text-xs ">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
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
    </footer>
  );
}

export default Footer;
