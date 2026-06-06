"use client";
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import MacWidget from '@/components/ui/MacWidget';
import { projects, getProjectCopy } from '@/data/projects';
import ProjectPreview from '@/components/projects/ProjectPreview';
import { useTranslation } from '@/contexts/LanguageContext';

export default function ProjectCards({ showCta = true, animateOnView = true }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => {
          const num = String(index + 1).padStart(2, '0');
          const { title, description } = getProjectCopy(t, project);
          const visibleTechs = project.technologies.slice(0, 3);
          const extraTechCount = project.technologies.length - visibleTechs.length;

          const motionProps = animateOnView
            ? {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.06 },
              }
            : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.35, delay: index * 0.04 },
              };

          return (
            <motion.div
              key={project.id}
              className={`group h-full ${project.secondaryImage ? 'sm:col-span-2' : ''}`}
              {...motionProps}
            >
              <MacWidget padding={false} className="overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                <ProjectPreview project={project} title={title} />

                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#86198f] dark:text-[#c084fc] font-semibold mb-1.5">
                    {t('projects.projectLabel', { num })}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2 leading-snug line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-3 flex-1">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {visibleTechs.map((tech) => (
                      <span key={tech} className="workspace-pill text-[10px] sm:text-xs py-1">
                        {tech}
                      </span>
                    ))}
                    {extraTechCount > 0 && (
                      <span className="workspace-pill text-[10px] sm:text-xs py-1 text-gray-500">
                        +{extraTechCount}
                      </span>
                    )}
                  </div>

                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#86198f] text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-[#701a7a] transition-all duration-300 mt-auto group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.openProject')}
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </MacWidget>
            </motion.div>
          );
        })}
      </div>

      {showCta && (
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          {...(animateOnView
            ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 } }
            : { animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: 0.2 } })}
        >
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#86198f]/30 dark:border-[#c084fc]/30 text-[#86198f] dark:text-[#c084fc] font-semibold hover:bg-[#86198f]/5 dark:hover:bg-[#c084fc]/10 transition-all duration-300"
            onClick={() => window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: 'contact' }))}
          >
            {t('projects.cta')}
            <FiArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </>
  );
}
