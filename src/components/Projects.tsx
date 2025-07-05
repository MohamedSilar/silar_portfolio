import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    
    {
      id: 1,
      title: "JourniXplorer - AI Travel Planner",
      description: "Built a responsive travel planner using HTML, CSS, and JavaScript. Implemented animated UI, dynamic form handling, and scroll effects. Deployed seamlessly on Vercel with GitHub integration.",
      image: "/images/ai1.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animation"],
      github: "https://github.com/MohamedSilar/JourniXplorer-Travel-Planner",
      live: "https://journey-explorer.netlify.app/"
    },
    {
      id: 2,
      title: "SkyNest Airlines - Airline Management System",
      description: "Built an Airline Management System using Java Swing and SQL. Implemented flight booking, schedule management, and custom airline branding. The system provides a comprehensive solution for managing airline operations.",
      image: "/images/cloud.jpg",
      tags: ["Java", "Swing", "SQL", "OOP", "Database"],
      github: "https://github.com/MohamedSilar/SkyNest-Airlines-Management"
    },
    
    {
      id: 3,
      title: "Food Coma - Food Ordering Application",
      description: "Developed a food ordering application using Android Studio with Java and XML. Features include an intuitive UI, food cart management, and a seamless ordering process tailored for mobile users.",
      image: "/img/foodapp.png",
      tags: ["Android Studio", "Java", "XML", "Mobile App"],
      github: "https://github.com/MohamedSilar/FOOD-COMA"
    }

  ];

  const handleProjectClick = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates my skills and approach to problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${activeProject === project.id ? 'ring-2 ring-blue-500' : ''
                }`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHub size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{projects[activeProject - 1].title} - Details</h3>
            <p className="text-gray-600 mb-6">{projects[activeProject - 1].description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {projects[activeProject - 1].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {projects[activeProject - 1].github && (
                <a
                  href={projects[activeProject - 1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center"
                >
                  <GitHub size={20} className="mr-2" />
                  View Source Code
                </a>
              )}
              {projects[activeProject - 1].live && (
                <a
                  href={projects[activeProject - 1].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Live Demo
                </a>
              )}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/MohamedSilar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
          >
            <GitHub size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
