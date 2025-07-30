import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-950 transition-all duration-500 justify-center text-center mt-8 ">
      <div className="">
        <h3 className="p-3 dark:text-white">
          © 2025 Pankaj. All right reserved.
        </h3>
      </div>

      <div className="flex gap-x-4 pb-2 justify-center">
        <div className="flex gap-4 ">
          <div className="border-cyan-600 hover:border-green-600 text-cyan-600 hover:text-white hover:bg-green-500 transition-all duration-300 border-2 p-2 rounded-xl shadow-md transform hover:scale-110 cursor-pointer">
            <a
              href="mailto:pankaj0172004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail size={24} />
            </a>
          </div>

          <div className="border-cyan-600 text-cyan-600 hover:text-white hover:bg-[#0077B5] transition-all duration-300 border-2 p-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-110 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/pankaj017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="border-cyan-600 hover:border-gray-500 text-cyan-600 hover:text-white hover:bg-[#333333] transition-all duration-300 border-2 p-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-110 cursor-pointer">
            <a
              href="https://github.com/pankaj0417"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div className="border-cyan-600 hover:border-red-400 text-cyan-600 hover:text-white hover:bg-[#E1306C] transition-all duration-300 border-2 p-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-110 cursor-pointer">
            <a
              href="https://www.instagram.com/official_pankaj17/profilecard/?igsh=bDdsNWZlZTgxbnox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
