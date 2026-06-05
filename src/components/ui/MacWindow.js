'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MacWindow({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  maxWidth = 'max-w-3xl',
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    document.addEventListener('keydown', handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close window"
            className="fixed inset-0 z-[100] bg-black/25 dark:bg-black/45 backdrop-blur-md cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="mac-window-title"
              className={`mac-window pointer-events-auto w-full ${maxWidth} max-h-[88vh] flex flex-col ${className}`}
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mac-window-titlebar shrink-0">
                <div className="flex items-center gap-2 pl-1">
                  <button
                    type="button"
                    className="mac-traffic-light mac-traffic-close"
                    onClick={onClose}
                    aria-label="Close"
                  />
                  <span className="mac-traffic-light mac-traffic-min" aria-hidden="true" />
                  <span className="mac-traffic-light mac-traffic-max" aria-hidden="true" />
                </div>
                <h2 id="mac-window-title" className="mac-window-title">
                  {title}
                </h2>
                <div className="w-[52px]" aria-hidden="true" />
              </div>
              <div className="mac-window-content flex-1 overflow-y-auto">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
