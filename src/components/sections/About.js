"use client";
import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp, FiHeart } from 'react-icons/fi';
import MacWidget from '@/components/ui/MacWidget';

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
    <section id="about" className="py-20 relative overflow-hidden mac-desktop">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-hand text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-2">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">Who I am and how I build products.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <MacWidget className="p-6 sm:p-8" padding={false}>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I am a passionate and experienced <span className="font-semibold text-[#86198f] dark:text-[#c084fc]">Full Stack Developer</span> with three years of dedicated expertise in building modern web and mobile applications. My specialization lies in creating robust, scalable solutions using cutting-edge technologies like Next.js, React, Node.js, React Native, and Supabase.
                </p>
                <p>
                  My journey has led me to architect and lead the development of comprehensive service management platforms from the ground up. I thrive in dynamic environments and have a proven track record of implementing complete API ecosystems and developing innovative multi-platform applications, such as barcode scanning systems.
                </p>
                <p>
                  I am driven by the challenge of solving complex problems and delivering high-quality, user-centric products that exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-black/5">
                {[
                  { value: '3+', label: 'Years' },
                  { value: '15+', label: 'Projects' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#86198f] dark:text-[#c084fc]">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </MacWidget>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {highlights.map((highlight) => (
              <MacWidget key={highlight.title}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#86198f] rounded-xl flex items-center justify-center shrink-0">
                    <highlight.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </MacWidget>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
