"use client";
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const experience = [
  {
    role: "Full Stack Developer",
    company: "M&N IT",
    period: "09/2025 - Present",
    location: "Remote",
    description: "Working as a Full Stack Developer at M&N IT, developing modern web applications using cutting-edge technologies. Focused on building scalable solutions with React, Next.js, MongoDB, and integrating AI capabilities through OpenAI SDK.",
    achievements: [
      "Developing full-stack web applications using React and Next.js.",
      "Implementing database solutions with MongoDB for efficient data management.",
      "Integrating OpenAI SDK to add AI-powered features to applications.",
      "Building responsive and performant user interfaces."
    ],
    technologies: ["React", "Next.js", "MongoDB", "OpenAI SDK"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    role: "Full Stack Developer",
    company: "PrestaFreedom",
    period: "2022 - Present",
    location: "Remote",
    description: "Led the end-to-end development of the PrestaFreedom service platform. My responsibilities included architecting the full-stack solution, developing both web and mobile applications, and implementing a complete API ecosystem with numerous third-party integrations.",
    achievements: [
      "Directed the development of a multi-faceted service management platform.",
      "Architected a full-stack solution using Next.js, React.js, and Supabase.",
      "Developed a multi-platform barcode scanning mobile application.",
      "Implemented integrations with PayXpert, Google Maps, FullCalendar, Meta, Resend, and more."
    ],
    technologies: ["Next.js", "React", "React Native", "Supabase", "Node.js", "TypeScript"],
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-[#86198f] rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiBriefcase className="text-white text-2xl" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in software development and the impact I&apos;ve made
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#86198f]/30 dark:bg-[#86198f]/20"></div>
              
              {/* Main experience card */}
              <div className="relative ml-16">
                {/* Timeline dot */}
                <div className={`absolute -left-12 top-8 w-8 h-8 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center shadow-lg`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Experience card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <FiMapPin className="text-purple-500" />
                          <span className="font-medium dark:text-gray-300">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="text-purple-500" />
                          <span className="dark:text-gray-300">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-flex items-center px-4 py-2 bg-[#86198f]/10 dark:bg-[#86198f]/20 text-[#86198f] dark:text-[#86198f] rounded-full text-sm font-medium">
                          <FiAward className="mr-2" />
                          Current Position
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                      <FiAward className="mr-2 text-purple-500" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-[#86198f] rounded-full mt-2"></div>
                          <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and create amazing digital experiences. Let&apos;s discuss your next project!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 