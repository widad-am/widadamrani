"use client";
import { FiFolder } from 'react-icons/fi';
import ProjectCards from '@/components/projects/ProjectCards';

export default function ProjectsDockPopup() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/5 dark:border-white/10">
        <div className="w-10 h-10 rounded-xl bg-[#86198f]/10 dark:bg-[#c084fc]/10 flex items-center justify-center shrink-0">
          <FiFolder className="w-5 h-5 text-[#86198f] dark:text-[#c084fc]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Projects</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Selected builds — full-stack web apps, automotive platforms, and mobile products I&apos;ve shipped.
          </p>
        </div>
      </div>

      <ProjectCards showCta animateOnView={false} />
    </div>
  );
}
