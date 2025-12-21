"use client";
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiZap } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  const floatingIcons = [
    { icon: FiCode, delay: 0, x: -20, y: -30 },
    { icon: FiSmartphone, delay: 0.5, x: 20, y: -20 },
    { icon: FiDatabase, delay: 1, x: -15, y: 25 },
    { icon: FiZap, delay: 1.5, x: 25, y: 15 },
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-visible bg-gray-50 dark:bg-gray-950 pb-0">
      {/* Smooth transition to next section - very extended */}
      <div className="absolute bottom-0 left-0 right-0 h-80 md:h-96 bg-gradient-to-b from-transparent via-transparent via-gray-50/10 via-gray-50/40 via-gray-50/70 to-gray-50 dark:via-gray-950/10 dark:via-gray-950/40 dark:via-gray-950/70 dark:to-gray-950 pointer-events-none"></div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-[#86198f]/20 dark:text-[#86198f]/10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: item.delay }}
        >
          <motion.div
            animate={{
              x: [0, item.x, 0],
              y: [0, item.y, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl"
          >
            <item.icon />
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-2xl pt-20 lg:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg font-medium text-[#86198f] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              👋 Hello, I&apos;m Widad Amrani
            </motion.p>
            
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">Full Stack</span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Developer</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Crafting exceptional digital experiences with modern technologies. 
              I build robust, scalable applications that users love to interact with.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#86198f] text-white font-semibold rounded-full hover:bg-[#701a7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Work Together
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 border-2 border-[#86198f] text-[#86198f] font-semibold rounded-full hover:bg-[#86198f] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main profile card */}
              <div className="w-80 h-80 rounded-3xl glass dark:glass-dark shadow-glow overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#86198f]/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-[#86198f]/20 mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden">
                      <Image
                        src="/images/WhatsApp Image 2024-07-26 at 17.18.31.jpg"
                        alt="Widad Amrani Profile Photo"
                        width={128}
                        height={128}
                        className="rounded-full object-cover w-32 h-32"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Widad Amrani</h3>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass dark:glass-dark shadow-glow"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-full flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Years</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl glass dark:glass-dark shadow-glow"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="h-full flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">15+</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 