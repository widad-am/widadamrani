"use client";
import Image from 'next/image';
import { useTranslation } from '@/contexts/LanguageContext';

export default function ProjectPreview({ project, title }) {
  const { t } = useTranslation();
  const displayTitle = title ?? project.id;

  if (!project.image) {
    return (
      <div className="h-44 sm:h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <span className="text-5xl">{project.icon}</span>
      </div>
    );
  }

  if (project.secondaryImage) {
    const screens = [
      {
        src: project.image,
        alt: t('projects.previewAltDashboard', { title: displayTitle }),
        label: t('projects.previewDashboard'),
      },
      {
        src: project.secondaryImage,
        alt: t('projects.previewAltScan', { title: displayTitle }),
        label: t('projects.previewScan'),
      },
    ];

    return (
      <div className="p-3 bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-emerald-950/40">
        <div className="grid grid-cols-2 gap-2 h-44 sm:h-52">
          {screens.map((screen) => (
            <div key={screen.label} className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-900 ring-1 ring-black/5 dark:ring-white/10">
              <div className="relative h-[calc(100%-24px)] p-2">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-contain object-center"
                />
              </div>
              <p className="h-6 flex items-center justify-center text-[9px] uppercase tracking-wide font-semibold text-emerald-700/80 dark:text-emerald-400/90 bg-emerald-50/80 dark:bg-emerald-950/30">
                {screen.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 group/img">
      <Image
        src={project.image}
        alt={displayTitle}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
