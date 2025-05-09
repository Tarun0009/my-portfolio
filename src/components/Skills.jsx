import React from "react";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Skills
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Here are some of the tools and technologies I work with.
        </p>

        {/* Skills List */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* React */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
            <FaReact className="text-4xl" />
            <p className="mt-2 text-lg">React</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* React Native */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-500 hover:text-white transition-all duration-300">
            <FaReact className="text-4xl" />
            <p className="mt-2 text-lg">React Native</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-500 hover:text-white transition-all duration-300">
            <FaJsSquare className="text-4xl" />
            <p className="mt-2 text-lg">JavaScript</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
            <FaHtml5 className="text-4xl" />
            <p className="mt-2 text-lg">HTML5</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
            <FaCss3Alt className="text-4xl" />
            <p className="mt-2 text-lg">CSS3</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
            <SiTailwindcss className="text-4xl" />
            <p className="mt-2 text-lg">Tailwind CSS</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-sky-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
            <SiMysql className="text-4xl" />
            <p className="mt-2 text-lg">MySQL</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-500 hover:text-white transition-all duration-300">
            <FaBootstrap className="text-4xl" />
            <p className="mt-2 text-lg">Bootstrap</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center group p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300">
            <FaDatabase className="text-4xl text-red-500" />
            <p className="mt-2 text-lg">Java</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
