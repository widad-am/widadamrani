"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiSearch, FiSliders } from 'react-icons/fi';
import { HiWifi } from 'react-icons/hi2';
import ThemeToggle from './ThemeToggle';

function AppleLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function MacMenuBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="mac-menubar fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-8 px-2.5 xs:px-3 sm:px-4 text-xs sm:text-[13px] mac-menubar-text">
        <div className="flex items-center gap-2.5 xs:gap-4 sm:gap-5 min-w-0">
          <AppleLogo className="w-3.5 h-3.5 shrink-0" />
          <a href="#hero" className="font-semibold truncate text-[11px] xs:text-xs sm:text-[13px] max-w-[120px] xs:max-w-none sm:max-w-none hover:opacity-70 transition-opacity">
            <span className="sm:hidden">Widad</span>
            <span className="hidden sm:inline">Widad&apos;s Portfolio</span>
          </a>
          <button
            type="button"
            className="hidden md:block hover:opacity-70 transition-opacity"
            onClick={() => window.dispatchEvent(new CustomEvent('dock-popup-open', { detail: 'contact' }))}
          >
            Contact
          </button>
          <a href="/assets/widadamrani.pdf" download className="hidden md:block hover:opacity-70 transition-opacity">Resume</a>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 mac-menubar-text-muted">
          <ThemeToggle />
          <HiWifi className="w-4 h-4 hidden sm:block" />
          <FiSearch className="w-3.5 h-3.5 hidden sm:block" />
          <FiSliders className="w-3.5 h-3.5 hidden lg:block" />
          <div className="relative w-5 h-5 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/20 hidden sm:block">
            <Image
              src="/images/WhatsApp Image 2024-07-26 at 17.18.31.jpeg"
              alt="Widad"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium tabular-nums text-xs sm:text-[13px] mac-menubar-text">{time}</span>
        </div>
      </div>
    </header>
  );
}
