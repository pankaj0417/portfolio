import React from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../../assets/portfolio.png";
import expense from "../../assets/expense.png";
import notes from "../../assets/notes.png";
import auth from "../../assets/Auth.png";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SkillCard from "./SkillCard";
import pyth from "../../assets/python-svgrepo-com.svg";
import html from "../../assets/html5-svgrepo-com.svg";
import css from "../../assets/css-3-svgrepo-com.svg";
import js from "../../assets/js-svgrepo-com.svg";
import react from "../../assets/react.svg";
import tail from "../../assets/tailwind-svgrepo-com.svg";
import node from "../../assets/node-js.svg";
import express from "../../assets/express-svgrepo-com.svg";
import mongo from "../../assets/mongo-svgrepo-com.svg";

const Project = () => {
  return (
    <div
      id="projects"
      className="min-h-screen md:mx-10 bg-white dark:bg-gray-800 transition-all duration-500 mt-20"
    >
      <br />
      <div className=" justify-center items-center text-center md:mx-10  bg-gray-100 dark:bg-gray-900 transition-all duration-500">
        <h1 className="font-semibold md:text-5xl text-2xl tracking-wide dark:text-white py-2">
          Projects
        </h1>
        <div className="flex flex-wrap py-12 justify-center px-8 gap-8">
          <ProjectCard
            image={portfolio}
            head="Portfolio Website"
            main="A Portfolio website built with React, Taliwind, Node.js, and Form with MongoDB integration"
            logo={[
              <FaReact />,
              <SiMongodb />,
              <SiTailwindcss />,
              <SiExpress />,
            ]}
            logo2={[<FaGithub />, <FaLinkedin />]}
          />
          <ProjectCard
            image={expense}
            head="Expense Tracker"
            main="A comprehensive expense tracker with analytics and charts."
            logo={[
              <FaReact />,
              <SiMongodb />,
              <SiTailwindcss />,
              <SiExpress />,
            ]}
            logo2={[<FaGithub />, <FaLinkedin />]}
          />
          <ProjectCard
            image={notes}
            head="Notes Application"
            main="An expense tracking application with beautiful charts and animations."
            logo={[
              <FaReact />,
              <SiMongodb />,
              <SiTailwindcss />,
              <SiExpress />,
            ]}
            logo2={[<FaGithub />, <FaLinkedin />]}
          />
          <ProjectCard
            image={auth}
            head="MERN Auth"
            main="User authentication system built using the MERN stack."
            logo={[
              <FaReact />,
              <SiMongodb />,
              <SiTailwindcss />,
              <SiExpress />,
            ]}
            logo2={[<FaGithub />, <FaLinkedin />]}
          />
        </div>
      </div>
      <div
        id="skills"
        className="justify-center items-center text-center mt-25"
      >
        <h1 className="font-bold text-4xl tracking-wide  py-2 dark:text-white">
          My Skills
        </h1>
        <div className="flex flex-wrap px-10 justify-center md:px-25 py-10 gap-8 dark:text-gray-300">
          <SkillCard skillimg={pyth} skillname="Python" />
          <SkillCard skillimg={html} skillname="HTML" />
          <SkillCard skillimg={css} skillname="CSS" />
          <SkillCard skillimg={js} skillname="Java Script" />
          <SkillCard skillimg={react} skillname="React" />
          <SkillCard skillimg={tail} skillname="Tailwind" />
          <SkillCard skillimg={node} skillname="Node.js" />
          <SkillCard skillimg={express} skillname="Express.js" />
          <SkillCard skillimg={mongo} skillname="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default Project;
