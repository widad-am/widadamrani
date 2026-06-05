"use client";
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle({ variant = 'menubar' }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === 'dark';

  if (!mounted) {
    return (
      <button type="button" className="mac-theme-btn" aria-label="Toggle theme" disabled>
        <FiMoon className="w-3.5 h-3.5 opacity-50" />
      </button>
    );
  }

  if (variant === 'switch') {
    return (
      <motion.button
        type="button"
        onClick={toggleTheme}
        className="relative w-12 h-6 rounded-full p-0.5 bg-gray-200 dark:bg-gray-700 transition-colors"
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow flex items-center justify-center"
          animate={{ x: isDark ? 22 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        >
          {isDark ? (
            <FiMoon className="w-3 h-3 text-[#c084fc]" />
          ) : (
            <FiSun className="w-3 h-3 text-amber-500" />
          )}
        </motion.div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="mac-theme-btn group"
      whileTap={{ scale: 0.88 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <FiSun className="w-3.5 h-3.5 text-amber-300 group-hover:text-amber-200 transition-colors" />
        ) : (
          <FiMoon className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        )}
      </motion.span>
    </motion.button>
  );
}
