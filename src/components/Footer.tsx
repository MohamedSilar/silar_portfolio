import React from 'react';
import { Github as GitHub, Linkedin, Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Mohamed Silar</h2>
            <p className="text-gray-400 max-w-md">
             Aspiring Information Technology professional driven by a passion for crafting impactful digital solutions and a relentless pursuit of knowledge and innovation.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex space-x-4">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mohamed Silar. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/MohamedSilar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-silar-374a09284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/MohamedSilar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8 flex items-center justify-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;