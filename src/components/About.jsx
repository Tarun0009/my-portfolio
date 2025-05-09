import React from "react";
import { motion } from "framer-motion";
import about from "../images/about.jpg"; // Your personal image

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-gray-100 text-gray-800 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 opacity-50 -z-10" />

      {/* Decorative Blob */}
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={about}
              alt="Web Development Illustration"
              className="w-80 h-80 sm:w-96 sm:h-96 xl:w-[28rem] xl:h-[28rem] object-cover rounded-2xl shadow-xl border border-gray-300"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6 text-center">
              About Me
            </h2>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
              I’m <span className="font-semibold text-blue-600">Tarun Pratap Singh</span> — a passionate software developer dedicated to building user-centric digital products. I enjoy transforming ideas into intuitive, high-performing, and visually appealing applications.
              <br /><br />
              My expertise lies in{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
                React.js, React Native, Tailwind CSS, and Java
              </span>. I am committed to continuous learning and collaboration to deliver impactful tech solutions.
              <br /><br />
              I earned my <span className="font-semibold text-blue-600">B.Tech in Computer Science</span> in 2024. Beyond the tech realm, I have a keen interest in sports, gaming, and exploring new innovations.
              <br /><br />
              Let’s connect and collaborate!
            </p>

            {/* Personal Quote */}
            <p className="italic text-gray-600 mt-4">
              “Code is like poetry — each line should have purpose and elegance.”
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                Let’s Connect
              </a>
              <a
                href="/TarunResume.pdf" // Replace with actual path
                download
                className="inline-block px-6 py-3 text-sm sm:text-lg font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
