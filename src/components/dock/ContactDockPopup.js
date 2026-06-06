"use client";
import Image from 'next/image';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';
import { useTranslation } from '@/contexts/LanguageContext';

const contactDetails = {
  email: "Widad.amraniacs@gmail.com",
  phone: "+212 602769701",
  linkedin: "https://www.linkedin.com/in/widad-amrani-23266022b/",
  github: "https://github.com/widad-am",
};

export default function ContactDockPopup() {
  const { t } = useTranslation();

  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-4 mb-6 pb-5 border-b border-black/5 dark:border-white/10">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#86198f]/20 shrink-0">
          <Image
            src="/images/WhatsApp Image 2024-07-26 at 17.18.31.jpeg"
            alt={t('contact.imageAlt')}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('contact.name')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.role')}</p>
          <p className="text-xs text-[#86198f] dark:text-[#c084fc] mt-1 font-medium">{t('contact.availability')}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { icon: FiMail, label: t('contact.email'), value: contactDetails.email, href: `mailto:${contactDetails.email}` },
          { icon: FiPhone, label: t('contact.phone'), value: contactDetails.phone, href: `tel:${contactDetails.phone}` },
          { icon: FiMapPin, label: t('contact.location'), value: t('contact.locationValue'), href: null },
        ].map((row) => (
          <div key={row.label} className="mac-popup-row">
            <row.icon className="w-4 h-4 text-[#86198f] dark:text-[#c084fc] shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{row.label}</p>
              {row.href ? (
                <a href={row.href} className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-[#86198f] dark:hover:text-[#c084fc] truncate block">
                  {row.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{row.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-6">
        <a
          href={contactDetails.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <FiLinkedin className="w-4 h-4" /> {t('contact.linkedin')}
        </a>
        <a
          href={contactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          <FiGithub className="w-4 h-4" /> {t('contact.github')}
        </a>
      </div>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={t('contact.formName')} className="mac-popup-input" />
        <input type="email" placeholder={t('contact.formEmail')} className="mac-popup-input" />
        <textarea rows={3} placeholder={t('contact.formMessage')} className="mac-popup-input resize-none" />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#86198f] text-white font-semibold hover:bg-[#701a7a] transition-colors"
        >
          <FiSend className="w-4 h-4" /> {t('contact.formSubmit')}
        </button>
      </form>
    </div>
  );
}
