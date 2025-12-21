"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  // { code: 'fr', label: 'FR', flag: '🇫🇷' },
  // { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isMounted, setIsMounted] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const langBtnRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    localStorage.setItem('lang', language);
    // Placeholder: connect to your i18n logic here
    // i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    setLanguage(storedLang);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langBtnRef.current && !langBtnRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    }
    if (showLangDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass shadow-glow">
      <nav className="container mx-auto px-6 flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
            Widad Amrani
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium group"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#86198f] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative" ref={langBtnRef}>
            <button
              className="flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={() => setShowLangDropdown((v) => !v)}
              aria-label="Switch language"
            >
              <span className="mr-1">{isMounted ? LANGUAGES.find(l => l.code === language)?.flag : LANGUAGES[0].flag}</span>
              <span>{isMounted ? LANGUAGES.find(l => l.code === language)?.label : LANGUAGES[0].label}</span>
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${language === lang.code ? 'font-bold text-[#86198f]' : 'text-gray-700 dark:text-gray-200'}`}
                    onClick={() => { setLanguage(lang.code); setShowLangDropdown(false); }}
                  >
                    <span className="mr-2">{lang.flag}</span> {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.a
            href="/assets/widadamrani.pdf"
            download
            className="px-6 py-2 bg-[#86198f] text-white rounded-full font-medium hover:bg-[#701a7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden glass"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/assets/widadamrani.pdf"
              download
              className="w-full mt-4 px-6 py-3 bg-[#86198f] text-white rounded-lg font-medium hover:bg-[#701a7a] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
} 