import React from 'react';
import { Briefcase, GraduationCap, MapPin, Phone, Mail, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate Information Technology student dedicated to creating innovative solutions and continuously learning new technologies.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-5/12 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-full h-full bg-blue-100 rounded-lg absolute top-4 left-4 -z-10"></div>
              <img 
                src="images/silar2.jpg" 
                alt="Mohamed Silar" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-6/12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Information Technology Student</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Mohamed Silar, a B.Tech Information Technology student with a 7.98 GPA (up to 5th semester) at Velammal College of Engineering & Technology. I'm passionate about developing applications that solve real-world problems and continuously expanding my knowledge in software development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Education</h4>
                  <p className="text-gray-600 text-sm">B.Tech Information Technology</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Experience</h4>
                  <p className="text-gray-600 text-sm">Java Development Virtual Intern</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600 text-sm">Madurai, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <Languages size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Languages</h4>
                  <p className="text-gray-600 text-sm">English, Tamil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 93453 54812</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">mohamedsilar26@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
              
              <a 
                href="images/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;