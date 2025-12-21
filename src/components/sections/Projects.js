"use client";
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

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
    liveDemo: "https://www.prestafreedom.com/",
    image: "/images/PrestaClient.jpg"
    // sourceCode: "#"
  },
  {
    title: "Maroc Fer",
    description: "A modern and professional website for Maroc Fer, showcasing their railway services and operations. The platform features a clean design, responsive layout, and intuitive navigation to provide users with comprehensive information about Morocco's railway services.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    gradient: "from-amber-500 to-orange-500",
    icon: "🚂",
    liveDemo: "https://marocfer.com/",
    image: "/images/marocfer.jpg"
  },
  {
    title: "KGM Mobility Morocco",
    description: "An elegant automotive website for KGM Mobility Morocco, featuring their vehicle lineup including Tivoli, Torres, Rexton, and Grand Musso. The site provides an immersive experience with modern design, interactive elements, and comprehensive vehicle information.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX"],
    gradient: "from-indigo-500 to-blue-500",
    icon: "🚗",
    liveDemo: "https://www.kg-mobility.ma/",
    image: "/images/KGM.jpg"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                {/* Project Image - Hero Style */}
                {project.image ? (
                  <div className="relative w-full h-64 lg:h-80 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={index < 2}
                    />
                  </div>
                ) : (
                  // Header for cards without image
                  <div className="p-6 lg:p-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 text-2xl shadow-md`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  {/* Title for cards with image */}
                  {project.image && (
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                    </div>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      className="inline-flex items-center px-5 py-2.5 bg-[#86198f] text-white text-sm font-medium rounded-lg hover:bg-[#701a7a] transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  )}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#86198f]/0 group-hover:bg-[#86198f]/5 pointer-events-none transition-all duration-500"></div>
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
            className="inline-flex items-center px-8 py-4 bg-[#86198f] text-white font-semibold rounded-full hover:bg-[#701a7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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