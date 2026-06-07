"use client";
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useTranslation } from '@/contexts/LanguageContext';
import { getCvPath, getCvFilename } from '@/data/cv';

export default function MacMobileCvStrip() {
  const { lang, t } = useTranslation();
  const cvHref = getCvPath(lang);
  const cvFilename = getCvFilename(lang);

  return (
    <motion.a
      href={cvHref}
      download={cvFilename}
      className="mac-cv-btn sm:hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileTap={{ scale: 0.96 }}
    >
      <FiDownload className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{t('cv.menuLabel')}</span>
    </motion.a>
  );
}
