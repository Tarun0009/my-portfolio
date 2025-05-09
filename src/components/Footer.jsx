import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">Tarun Pratap Singh</h2>
          <p className="text-sm text-gray-400 mt-2">Full-Stack Developer | Problem Solver</p>
          <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Connect with Me</h3>
          <div className="flex justify-center sm:justify-start gap-5">
            <a
              href="https://github.com/Tarun0009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="hover:text-blue-400 transition duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-pratap-singh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:text-blue-400 transition duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tarunpratapsingh097@gmail.com"
              aria-label="Email"
              title="Email"
              className="hover:text-blue-400 transition duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        Designed & built with by Tarun Pratap Singh
      </div>
    </footer>
  );
};

export default Footer;
