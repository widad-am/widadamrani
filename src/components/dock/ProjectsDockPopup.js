"use client";
import { useTranslation } from '@/contexts/LanguageContext';
import ProjectCards from '@/components/projects/ProjectCards';

export default function ProjectsDockPopup() {
  const { t } = useTranslation();

  return (
    <div className="p-5 sm:p-6">
      <div className="mb-6 pb-4 border-b border-black/5 dark:border-white/10">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('projects.title')}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('projects.subtitle')}</p>
      </div>
      <ProjectCards showCta animateOnView={false} />
    </div>
  );
}
