"use client";
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiTrendingUp, FiHeart } from 'react-icons/fi';

export default function About() {
  const highlights = [
    {
      icon: FiCode,
      title: "Full Stack Development",
      description: "Building complete web and mobile applications from frontend to backend"
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Solutions",
      description: "Creating robust systems that grow with your business needs"
    },
    {
      icon: FiHeart,
      title: "User-Centric Design",
      description: "Focusing on exceptional user experiences and intuitive interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiUser className="text-white text-2xl" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I am a passionate and experienced <span className="font-semibold text-purple-600">Full Stack Developer</span> with three years of dedicated expertise in building modern web and mobile applications. My specialization lies in creating robust, scalable solutions using cutting-edge technologies like Next.js, React, React Native, and Supabase.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                My journey has led me to architect and lead the development of comprehensive service management platforms from the ground up. I thrive in dynamic environments and have a proven track record of implementing complete API ecosystems and developing innovative multi-platform applications, such as barcode scanning systems.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I am driven by the challenge of solving complex problems and delivering high-quality, user-centric products that exceed expectations.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="glass dark:glass-dark p-6 rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <highlight.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 