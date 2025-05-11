import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-[#0c0c0c] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Tools and technologies I use regularly in my development work.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-sm sm:text-base group p-3 rounded-lg shadow-md border border-white/10 bg-black/80 hover:bg-${skill.color}-500 hover:text-white transition duration-300`}
            >
              <skill.icon className="text-3xl mb-1" />
              <p className="mb-1 font-medium">{skill.name}</p>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className={`h-2 rounded-full bg-${skill.color}-500`}
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: "React", icon: FaReact, level: "95%", color: "blue" },
  { name: "React Native", icon: FaReact, level: "85%", color: "indigo" },
  { name: "JavaScript", icon: FaJsSquare, level: "100%", color: "yellow" },
  { name: "HTML5", icon: FaHtml5, level: "100%", color: "orange" },
  { name: "CSS3", icon: FaCss3Alt, level: "95%", color: "blue" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "95%", color: "sky" },
  { name: "MySQL", icon: SiMysql, level: "100%", color: "blue" },
  { name: "Bootstrap", icon: FaBootstrap, level: "95%", color: "purple" },
  { name: "Java", icon: FaDatabase, level: "100%", color: "red" },
];

export default Skills;
