"use client";
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function MacWindowModal({ open, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const sizeClass = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    '2xl': 'max-w-6xl',
  }[size];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mac-modal-overlay fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-2 xs:p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={`mac-modal-window w-full ${sizeClass} max-h-[88vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-t-xl sm:rounded-xl`}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mac-modal-titlebar flex items-center gap-3 px-4 py-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all"
                  aria-label="Close"
                />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="flex-1 text-center font-medium text-sm text-gray-600 dark:text-gray-300 truncate pr-8">
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Close window"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            <div className="mac-modal-body flex-1 overflow-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
