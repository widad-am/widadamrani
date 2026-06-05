"use client";
import { useState } from 'react';
import { FiMessageCircle, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'Who are you?',
    answer:
      'I am a passionate Full Stack Developer with three years of dedicated expertise in building modern web and mobile applications. My journey has led me to architect and lead comprehensive service management platforms from the ground up — I thrive in dynamic environments and love turning complex problems into polished products.',
  },
  {
    question: 'What do you specialize in?',
    answer:
      'Full Stack Development — building complete web and mobile applications from frontend to backend. Scalable Solutions — creating robust systems that grow with your business needs. User-Centric Design — focusing on exceptional user experiences and intuitive interfaces.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'I specialize in Next.js, React, React Native, and Supabase for end-to-end product development. I implement complete API ecosystems, PostgreSQL-backed data layers, and multi-platform applications — including innovative systems like barcode scanning workflows.',
  },
  {
    question: 'How do you approach projects?',
    answer:
      'I architect solutions from the ground up: defining APIs, designing scalable backends, and shipping polished UIs. I focus on solving complex problems with high-quality, user-centric products that exceed expectations — from initial concept through deployment and iteration.',
  },
  {
    question: 'Are you open to work?',
    answer:
      'Yes — I am available for new projects and collaborations. With 3+ years of experience and 15+ projects delivered, I am driven to help teams ship scalable web and mobile products. Reach out via the Contact dock item or menu to start a conversation.',
  },
];

export default function FaqDockPopup() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/5 dark:border-white/10">
        <div className="w-10 h-10 rounded-xl bg-[#86198f]/10 dark:bg-[#c084fc]/10 flex items-center justify-center shrink-0">
          <FiMessageCircle className="w-5 h-5 text-[#86198f] dark:text-[#c084fc]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">FAQ</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Who I am and how I build products.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-gray-50/80 dark:bg-gray-800/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-gray-100/80 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {item.question}
                </span>
                <FiChevronDown
                  className={`w-4 h-4 shrink-0 text-[#86198f] dark:text-[#c084fc] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-black/[0.04] dark:border-white/[0.06] pt-3">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10 grid grid-cols-3 gap-3 text-center">
        {[
          { value: '3+', label: 'Years' },
          { value: '15+', label: 'Projects' },
          { value: '100%', label: 'Satisfaction' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-xl font-bold text-[#86198f] dark:text-[#c084fc]">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
