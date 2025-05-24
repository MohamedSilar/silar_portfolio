import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceItem: React.FC<{
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience' | 'certificate';
}> = ({ date, title, organization, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap size={24} />;
      case 'experience':
        return <Briefcase size={24} />;
      case 'certificate':
        return <Award size={24} />;
      default:
        return <Briefcase size={24} />;
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
          {getIcon()}
        </div>
        <div className="flex-grow w-0.5 bg-blue-100 my-2"></div>
      </div>
      <div className="pb-8">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-2 inline-block">
          {date}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <h4 className="text-lg text-gray-600 mb-3">{organization}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional experiences that have shaped my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Briefcase size={24} className="mr-3 text-blue-600" />
              Professional Experience
            </h3>
            <ExperienceItem
              date="Feb 2024"
              title="Member, Google Developer Program"
              organization="Google"
              description="Joined as an organizer in the Google Developer Program, contributing to community-building activities, organizing events, and promoting modern development practices among aspiring developers."
              type="experience"
            />
            <div className="space-y-2">
              <ExperienceItem
                date="Aug - Sep 2024"
                title="Java Development Virtual Intern"
                organization="TechnoHacks Solutions Pvt. Ltd."
                description="Contributed to Java-based projects, showcasing expertise in software development, problem-solving, and collaboration."
                type="experience"
              />
              <ExperienceItem
                date="Oct 2024"
                title="Full Stack Web Development Training Program"
                organization="OctaNet Services Pvt. Ltd"
                description="Successfully completed a comprehensive Full Stack Development Training Program, gaining hands-on experience in modern web development technologies and best practices."
                type="experience"
              />


              <ExperienceItem
                date="Dec - Jan 2023"
                title="Mobile App Design Intern"
                organization="NSIC (National Small Industries Corporation Limited), Chennai"
                description="Gained hands-on experience in mobile app design and implementation, learning about user interface design principles and implementation techniques."
                type="experience"
              />

              <ExperienceItem
                date="Mar 2022"
                title="Web Development Workshop"
                organization="NIT Trichy, Vortex'22"
                description="Attended a Web Development workshop at NIT Trichy during Vortex'22, gaining insights into modern web technologies and development practices."
                type="experience"
              />

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GraduationCap size={24} className="mr-3 text-blue-600" />
              Education
            </h3>

            <div className="space-y-2">
              <ExperienceItem
                date="2020 - Present"
                title="B.Tech Information Technology"
                organization="Velammal College of Engineering & Technology"
                description="Currently pursuing B.Tech in Information Technology with a CGPA of 7.98 (up to 5th semester). Focusing on programming, data structures, and software development."
                type="education"
              />

              <ExperienceItem
                date="2018 - 2020"
                title="Higher Secondary Certificate (HSC)"
                organization="Algumalar Matriculation Higher Secondary School"
                description="Completed HSC with 75.5%, focusing on Mathematics, Physics, and Computer Science."
                type="education"
              />

              <ExperienceItem
                date="2018"
                title="Secondary School Leaving Certificate (SSLC)"
                organization="Vatsalaya Matriculation Higher Secondary School"
                description="Completed SSLC with 75.0%, developing a strong foundation in mathematics and science."
                type="education"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <Award size={24} className="mr-3 text-blue-600" />
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Programming with Java</h4>
              <p className="text-gray-600 text-sm mb-3">Amazon's Junior Software Developer Professional Certificate program - Coursera</p>
              <span className="text-blue-600 text-sm font-medium">2023</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Java Full Stack Development</h4>
              <p className="text-gray-600 text-sm mb-3">Coursera - Comprehensive course covering front-end, back-end, and database technologies</p>
              <span className="text-blue-600 text-sm font-medium">2022</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Data Analytics and Visualization</h4>
              <p className="text-gray-600 text-sm mb-3">Accenture's Job Simulation - Focusing on data modeling and storytelling</p>
              <span className="text-blue-600 text-sm font-medium">2023</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Cybersecurity for Beginners</h4>
              <p className="text-gray-600 text-sm mb-3">Tata STRIVE & Microsoft - 40-hour foundational course covering core cybersecurity principles, threat analysis, and best practices.</p>
              <span className="text-blue-600 text-sm font-medium">2024</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Career Edge - Young Professional</h4>
              <p className="text-gray-600 text-sm mb-3">TCS iON - Covered soft skills, communication, resume writing, interview & group discussion skills, business etiquette, AI overview, and more.</p>
              <span className="text-blue-600 text-sm font-medium">2024</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">CodeJam'23 - Programming Contest</h4>
              <p className="text-gray-600 text-sm mb-3">Velammal College of Engineering and Technology - Participation in coding contest organized by the Department of IT.</p>
              <span className="text-blue-600 text-sm font-medium">2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;