"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import MacWidget from '@/components/ui/MacWidget';
import MacFolder from '@/components/ui/MacFolder';
import MacWeatherWidget from '@/components/ui/MacWeatherWidget';
import MacMobileCvStrip from '@/components/ui/MacMobileCvStrip';
import { useTranslation } from '@/contexts/LanguageContext';
import { getCvPath, getCvFilename } from '@/data/cv';
import { dictionaries } from '@/i18n';

export default function Hero() {
  const { lang, t } = useTranslation();
  const cvHref = getCvPath(lang);
  const cvFilename = getCvFilename(lang);
  const cvLabel = t('cv.folderLabel');
  const expertise = dictionaries[lang]?.hero?.expertise ?? dictionaries.en.hero.expertise;
  const folderProjects = dictionaries[lang]?.hero?.folderProjects ?? dictionaries.en.hero.folderProjects;

  return (
    <section id="hero" className="mac-desktop relative min-h-0 sm:min-h-screen pt-8 sm:pt-10 pb-36 sm:pb-32 lg:pb-28 overflow-x-hidden">
      <div className="relative max-w-[1500px] mx-auto px-3 xs:px-4 sm:px-8 lg:min-h-[calc(100vh-5rem)] flex flex-col lg:block">
        <div className="order-2 lg:order-none flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-start justify-between gap-3 sm:gap-4 pt-0 mt-4 sm:pt-8 sm:mt-0">
          <div className="flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-start gap-3 sm:gap-4 w-full xs:w-auto">
            <motion.div
              className="w-full xs:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MacWidget className="w-full xs:w-[280px] sm:w-[300px]">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h2 className="font-hand text-xl sm:text-2xl text-gray-800 dark:text-gray-100 leading-tight">
                    {t('hero.expertiseTitle')}
                  </h2>
                  <span className="mac-done-btn shrink-0">
                    <span aria-hidden="true">☺</span> {t('hero.done')}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MacWidget>
            </motion.div>

            <motion.div
              className="hidden sm:block w-full xs:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MacWeatherWidget />
            </motion.div>
          </div>

          <motion.div
            className="hidden sm:block max-w-xs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mac-notification">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                  M
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">{t('hero.messagesApp')}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">{t('hero.messagesNow')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug mb-3">
                {t('hero.messagesBody')}
              </p>
              <button
                type="button"
                className="text-sm font-semibold text-[#86198f] dark:text-[#c084fc] hover:underline"
                onClick={() => window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: 'contact' }))}
              >
                {t('hero.connect')}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-none relative mt-0 sm:mt-4 lg:mt-0 lg:min-h-[520px]">
          <div className="hidden sm:flex flex-row justify-center xs:justify-start gap-4 sm:gap-6 lg:gap-8 lg:absolute lg:left-0 lg:top-8 z-10 mb-4 sm:mb-8 lg:mb-0">
            <MacFolder label={t('hero.folderAbout')} popup="faq" />
            <MacFolder label={cvLabel} href={cvHref} download downloadName={cvFilename} />
          </div>

          <div className="hidden lg:flex flex-col gap-6 absolute right-0 top-8 z-10">
            {folderProjects.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <MacFolder label={label} popup="projects" className="max-w-[200px]" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center lg:absolute lg:inset-0 lg:pointer-events-none">
            <motion.div
              className="relative flex flex-col items-center pointer-events-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="font-hand text-lg xs:text-xl sm:text-2xl text-gray-800 dark:text-gray-100 mb-2 self-center xs:self-start ml-0 xs:-ml-4 sm:-ml-8 rotate-[-3deg] max-w-full px-1">
                {t('hero.greeting')}
                <svg className="w-16 h-10 text-gray-600 dark:text-gray-400 mt-1" viewBox="0 0 80 40" fill="none">
                  <path d="M5 5 C30 30, 50 35, 75 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 rounded-full bg-[#86198f]/10 blur-2xl scale-110" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-2xl">
                  <Image
                    src="/images/WhatsApp Image 2024-07-26 at 17.18.31.jpeg"
                    alt={t('hero.imageAlt')}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="font-hand text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-[260px] xs:max-w-xs sm:max-w-sm text-center mt-3 sm:mt-4 rotate-[1deg] leading-relaxed px-2">
                <svg className="w-12 h-8 text-gray-500 dark:text-gray-400 mx-auto mb-1 rotate-180" viewBox="0 0 48 32" fill="none">
                  <path d="M5 28 C20 5, 30 5, 43 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
                {t('hero.bio')}
              </div>

              <MacMobileCvStrip />
            </motion.div>
          </div>

          <motion.div
            className="hidden sm:flex mt-6 sm:mt-8 justify-center lg:block lg:mt-0 lg:absolute lg:left-8 lg:bottom-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MacWidget className="w-36 sm:w-40 text-center" padding>
              <div className="mac-vinyl mx-auto mb-3" aria-hidden="true">
                <div className="mac-vinyl-disc" />
              </div>
              <p className="font-hand text-lg text-gray-800 dark:text-gray-100">{t('hero.shipCode')}</p>
            </MacWidget>
          </motion.div>
        </div>

        <div className="order-3 lg:order-none hidden sm:grid lg:hidden grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 pb-2">
          {folderProjects.map((label) => (
            <MacFolder key={label} label={label} popup="projects" />
          ))}
        </div>
      </div>
    </section>
  );
}
