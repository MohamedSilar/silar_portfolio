import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const texts = ["Developer", "Designer", "Problem Solver"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        }
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, 1500); // Pause before deleting
          return;
        }
      }
      
      setTimeout(type, isDeleting ? 50 : 150);
    };
    
    type();
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-blue-500 opacity-70"></div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Hi, I'm <span className="text-blue-600">Mohamed Silar</span>
              </h1>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-blue-500 opacity-70"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">
              I'm a <span ref={typingRef} className="text-blue-600 border-r-2 border-blue-600 pr-1 animate-pulse"></span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Information Technology undergraduate with a passion for creating elegant solutions.
              Dedicated to building applications that solve real-world problems.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a 
                href="https://github.com/MohamedSilar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-silar-374a09284/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/MohamedSilar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Code size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full absolute -z-10 top-4 -right-4 opacity-10 animate-pulse"></div>
              <div className="w-52 h-52 md:w-64 md:h-64 bg-blue-300 rounded-full absolute -z-10 -bottom-4 -left-4 opacity-10 animate-pulse" style={{ animationDelay: "300ms" }}></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full relative overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105">
                <img src={`${import.meta.env.BASE_URL}images/silar2.jpg`} alt="Silar" />

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
          <span className="text-sm mb-1">Scroll Down</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
