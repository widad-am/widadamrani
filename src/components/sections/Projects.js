"use client";
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: "PrestaFreedom Backoffice",
    description: "A comprehensive back-office system for service management, featuring an admin dashboard, analytics, automated workflows, and role-based access control.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Chart.js", "FullCalendar", "Node-cron"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🏢",
    liveDemo: "https://admin.prestafreedom.com/dashboard"
    // sourceCode: "#"
  },
  {
    title: "PrestaFreedom Client App",
    description: "The main client-facing web application for the PrestaFreedom service. It includes features like real-time tracking, a quoting system, and secure payment processing with PayXpert.",
    technologies: ["Next.js", "Supabase", "Jotai", "PayXpert", "Resend API", "Google Maps API"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼",
    liveDemo: "https://www.prestafreedom.com/"
    // sourceCode: "#"
  },
  {
    title: "JumiDeal: Smart Vendor Management App",
    description: "A powerful mobile application for Jumia vendors that streamlines product listing, price calculation, and business management. With JumiDeal, vendors can list products in under a minute, instantly calculate exact costs and profits (including Jumia's fees), and use simulation tools to preview earnings. The app features a role-based dashboard for both regular users and admins, and offers a quoting system for premium access—empowering vendors to save time, maximize profits, and efficiently manage their business on the go",
    technologies: ["React Native","Expo","TypeScript","Supabase","Expo Image Picker", "React Navigation"],
    gradient: "from-green-500 to-emerald-500",
    icon: "📱",
    // liveDemo: "https://admin.prestafreedom.com/dashboard"
    // sourceCode: "#"
  },
  {
    title: "PrestaFreedom Mobile App",
    description: "A feature-rich mobile app for PrestaFreedom clients, built with Expo Router. It includes calendar views, date pickers, and other interactive elements. (PFMassirati)",
    technologies: ["React Native", "Expo Router", "Supabase", "RNEUI", "React Native Calendars"],
    gradient: "from-orange-500 to-red-500",
    icon: "📅",
    // liveDemo: "#"
    // sourceCode: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects Showcase</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work that demonstrates my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-full">
                {/* Main card */}
                <div className="h-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                  {/* Header with gradient */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 text-2xl`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-4">
                    {project.liveDemo && (
                      <motion.a 
                        href={project.liveDemo} 
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group/link"
                        whileHover={{ x: 5 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                        Live Demo
                      </motion.a>
                    )}
                    {/*
                    <motion.a 
                      href={project.sourceCode || "#"} 
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      Source Code
                    </motion.a>
                    */}
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiArrowRight className="text-sm" />
                  </motion.div>
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 