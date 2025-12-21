"use client";
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-12 h-6 bg-gray-200 rounded-full p-1">
        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
          <FiSun className="w-3 h-3 text-yellow-500" />
        </div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10"
        animate={{
          x: theme === 'dark' ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <FiSun className="w-3.5 h-3.5 text-yellow-500" />
          ) : (
            <FiMoon className="w-3.5 h-3.5 text-white" />
          )}
        </motion.div>
      </motion.div>
      
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 dark:opacity-100 z-0"
        style={{
          background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        }}
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
} 