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
    liveDemo: "https://admin.prestafreedom.com/dashboard",
    image: "/images/backofficeprestafreedom.png"
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
    title: "EXEED Maroc",
    description: "The official EXEED Maroc website showcasing premium vehicle models including VX, RX, ES, and ET. Features immersive model exploration, REEV technology highlights, performance and safety sections, and showroom locations in Casablanca and Rabat.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX", "Responsive Design"],
    gradient: "from-slate-600 to-gray-800",
    icon: "🚙",
    liveDemo: "https://exeedmaroc.vercel.app/",
    image: "/images/Exeed.png"
  },
  {
    title: "JAC Motors Morocco",
    description: "A vibrant automotive website for JAC Motors Morocco, featuring their urban vehicle lineup with engaging video content, model exploration, and dealership information. Built with a modern, colorful design that reflects the brand's dynamic identity.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX", "Responsive Design"],
    gradient: "from-red-500 to-rose-600",
    icon: "🚘",
    liveDemo: "https://jacmotors.ma/fr",
    image: "/images/JAC.png"
  },
  {
    title: "JumiDeal: Smart Vendor Management App",
    description: "A powerful mobile application for Jumia vendors that streamlines product listing, price calculation, and business management. With JumiDeal, vendors can list products in under a minute, instantly calculate exact costs and profits (including Jumia's fees), and use simulation tools to preview earnings. The app features a role-based dashboard for both regular users and admins, and offers a quoting system for premium access—empowering vendors to save time, maximize profits, and efficiently manage their business on the go",
    technologies: ["React Native","Expo","TypeScript","Supabase","Expo Image Picker", "React Navigation"],
    gradient: "from-green-500 to-emerald-500",
    icon: "📱",
    image: "/images/appJumiDeal.png",
    secondaryImage: "/images/appJumiDeal-scan.png"
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

function ProjectImages({ project, index, featured = false }) {
  if (!project.image) return null;

  if (project.secondaryImage) {
    const screens = [
      { src: project.image, alt: `${project.title} - dashboard`, label: 'Dashboard' },
      { src: project.secondaryImage, alt: `${project.title} - barcode scan`, label: 'Barcode Scan' },
    ];

    return (
      <div className={`relative w-full shrink-0 p-3 sm:p-4 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-emerald-950/40 ${featured ? 'md:h-full md:min-h-[280px]' : ''}`}>
        <div className={`grid grid-cols-2 gap-2.5 sm:gap-3 h-52 sm:h-60 ${featured ? 'md:h-full md:min-h-[248px]' : 'lg:h-64'}`}>
          {screens.map((screen) => (
            <div
              key={screen.label}
              className="relative flex flex-col min-h-0 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            >
              <div className="relative flex-1 min-h-0 p-2 sm:p-3">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 640px) 45vw, 22vw"
                  className="object-contain object-center drop-shadow-sm"
                />
              </div>
              <span className="shrink-0 py-1.5 text-center text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-emerald-700/80 dark:text-emerald-400/90 bg-emerald-50/80 dark:bg-emerald-950/30 border-t border-emerald-100 dark:border-emerald-900/50">
                {screen.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full shrink-0 h-40 sm:h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={index < 4}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-[1600px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects Showcase</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work that demonstrates my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {projects.map((project, index) => {
            const visibleTechs = project.technologies.slice(0, 3);
            const extraTechCount = project.technologies.length - visibleTechs.length;

            return (
            <motion.div
              key={project.title}
              className={`group h-full ${project.secondaryImage ? 'sm:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={`relative h-full flex bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 ${project.secondaryImage ? 'flex-col md:flex-row' : 'flex-col'}`}>
                {project.image ? (
                  <div className={project.secondaryImage ? 'md:w-[56%] shrink-0' : ''}>
                    <ProjectImages project={project} index={index} featured={!!project.secondaryImage} />
                  </div>
                ) : (
                  <div className="p-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} mb-3 text-xl shadow-md`}>
                      {project.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                )}

                {/* Content Section */}
                <div className={`flex flex-col flex-1 p-4 ${project.secondaryImage ? 'md:py-5 md:px-5 md:justify-center' : ''}`}>
                  {project.image && (
                    <h3 className={`font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2 ${project.secondaryImage ? 'text-lg' : 'text-base'}`}>
                      {project.title}
                    </h3>
                  )}

                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-3 flex-1 ${project.secondaryImage ? 'text-sm line-clamp-4' : 'text-xs sm:text-sm line-clamp-3'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {visibleTechs.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs font-medium rounded border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {extraTechCount > 0 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs font-medium">
                        +{extraTechCount}
                      </span>
                    )}
                  </div>

                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      className={`inline-flex items-center justify-center px-3 py-2 bg-[#86198f] text-white text-xs font-medium rounded-lg hover:bg-[#701a7a] transition-all duration-300 mt-auto group/btn ${project.secondaryImage ? 'md:w-auto md:self-start' : 'w-full'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <FiArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                    </motion.a>
                  )}
                </div>

                <div className="absolute inset-0 rounded-xl bg-[#86198f]/0 group-hover:bg-[#86198f]/5 pointer-events-none transition-all duration-300"></div>
              </div>
            </motion.div>
            );
          })}
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