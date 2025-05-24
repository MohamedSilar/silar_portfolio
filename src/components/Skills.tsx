import React, { useState } from 'react';
import { Code, Database, Cpu, Globe, GitBranch, Server } from 'lucide-react';

const SkillCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  skills: { name: string; proficiency: number }[];
  active: boolean;
  onClick: () => void;
}> = ({ icon, title, skills, active, onClick }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
        active ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className={`${active ? 'text-white' : 'text-blue-600'} mr-3`}>{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      {active && (
        <div className="mt-4 space-y-3 animate-fadeIn">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2.5">
                <div
                  className="bg-white h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java', proficiency: 85 },
        { name: 'C', proficiency: 65 },
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: [
        { name: 'HTML', proficiency: 90 },
        { name: 'CSS', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 }
      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', proficiency: 75 },
        { name: 'Firebase', proficiency: 65 }
      ]
    },
    {
      id: 'android',
      title: 'App Development',
      icon: <Cpu size={24} />,
      skills: [
        { name: 'Android Basics', proficiency: 60 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & IDEs',
      icon: <Server size={24} />,
      skills: [
        { name: 'Eclipse', proficiency: 85 },
        { name: 'Visual Studio', proficiency: 80 },
        { name: 'Android Studio', proficiency: 65 },
        { name: 'Figma', proficiency: 70 }
      ]
    },
    {
      id: 'versioncontrol',
      title: 'Version Control',
      icon: <GitBranch size={24} />,
      skills: [
        { name: 'Git', proficiency: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my technical skills and competencies that I've developed through education, projects, and practical experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">My Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-4">
                <Code size={32} />
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Object-Oriented Programming</h4>
              <p className="text-gray-600 text-center text-sm">Designing modular, reusable code structures</p>
            </div>
            
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-4">
                <Database size={32} />
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Database Management</h4>
              <p className="text-gray-600 text-center text-sm">Designing efficient data storage solutions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-4">
                <Globe size={32} />
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Web Development</h4>
              <p className="text-gray-600 text-center text-sm">Creating responsive and interactive web applications</p>
            </div>
            
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-4">
                <Cpu size={32} />
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Mobile Development</h4>
              <p className="text-gray-600 text-center text-sm">Building Android applications with user-friendly interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;