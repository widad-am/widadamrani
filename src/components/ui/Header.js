"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Work', popup: 'projects' },
  { name: 'About', popup: 'faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero'];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const isActive = (href) => href && activeSection === href.replace('#', '');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav className="workspace-window max-w-[1400px] mx-auto px-4 sm:px-5 py-3 flex justify-between items-center gap-4">
        <motion.a
          href="#hero"
          className="font-mono text-lg sm:text-xl font-bold text-gray-900 dark:text-white shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          widad<span className="text-[#86198f]">.dev</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center rounded-full bg-black/[0.03] dark:bg-white/[0.04] p-1">
            {navLinks.map((link, index) =>
              link.popup ? (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: link.popup }))}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-[#86198f]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {link.name}
                </motion.button>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-white dark:bg-gray-800 text-[#86198f] shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#86198f]'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {link.name}
                </motion.a>
              )
            )}
          </div>

          <ThemeToggle />

          <motion.a
            href="/assets/widadamrani.pdf"
            download
            className="px-5 py-2 bg-[#86198f] text-white text-sm rounded-full font-medium hover:bg-[#701a7a] transition-all duration-300 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            resume.pdf
          </motion.a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          className="md:hidden workspace-window max-w-[1400px] mx-auto mt-2 p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.popup ? (
                <button
                  key={link.name}
                  type="button"
                  className="block w-full text-left px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-[#86198f]/5 hover:text-[#86198f] transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: link.popup }));
                  }}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-[#86198f]/5 hover:text-[#86198f] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="/assets/widadamrani.pdf"
              download
              className="block mt-2 px-4 py-3 bg-[#86198f] text-white text-center rounded-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              resume.pdf
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
