import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../images/portfolio.png";
import classTrackerImg from "../images/classTracker.png";
import passGenImg from "../images/passGen.png";
import shpSphereImg from "../images/shpsphere.png";
import omTechImg from "../images/omtech.PNG";

const projects = [
  {
    title: "OM Tech Solutions – Company Website",
    description:
      "A fully responsive and dynamic company website built using React.js and Tailwind CSS. It showcases services like digital marketing, SEO, app and web development with sleek UI and booking features.",
    link: "https://tarun0009.github.io/omconsulting/#/",
    image: omTechImg,
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills and projects.",
    link: "https://tarun0009.github.io/myportfolio/",
    image: portfolioImg,
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Class Tracker",
    description:
      "A system for managing student attendance, enabling institutions to efficiently track attendance while providing a user-friendly interface.",
    link: "https://tarun0009.github.io/ClassTracker/",
    image: classTrackerImg,
    tech: "React, Node.js",
  },
  {
    title: "Password Generator",
    description:
      "A responsive web app that generates secure passwords with customizable options. Includes copy-to-clipboard functionality.",
    link: "https://tarun0009.github.io/Password-Generator/",
    image: passGenImg,
    tech: "JavaScript, HTML, CSS",
  },
  {
    title: "ShopSphere - E-commerce Website",
    description:
      "A modern and responsive e-commerce platform built with React.js and Tailwind CSS, providing a seamless shopping experience.",
    link: "https://tarun0009.github.io/shopsphere/",
    image: shpSphereImg,
    tech: "React.js, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of my featured web and app development projects,
            highlighting my ability to design, build, and deploy full-stack
            solutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative border rounded-2xl p-4 bg-white shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ImageWithSkeleton src={project.image} alt={project.title} />

              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-block bg-blue-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full aspect-[4/3] relative bg-gray-200 rounded-xl overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default Projects;
