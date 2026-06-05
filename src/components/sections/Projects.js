"use client";
import { motion } from 'framer-motion';
import { FiFolder } from 'react-icons/fi';
import ProjectCards from '@/components/projects/ProjectCards';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden mac-desktop">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-hand text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-2 flex items-center gap-2">
            <FiFolder className="w-8 h-8 text-[#86198f] dark:text-[#c084fc]" />
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Selected builds — full-stack web apps, automotive platforms, and mobile products I&apos;ve shipped.
          </p>
        </motion.div>

        <ProjectCards />
      </div>
    </section>
  );
}
