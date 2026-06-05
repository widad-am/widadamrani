"use client";
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const contactDetails = {
  linkedin: "https://www.linkedin.com/in/widad-amrani-23266022b/",
  github: "https://github.com/widad-am",
  email: "Widad.amraniacs@gmail.com",
};

export default function Footer() {
  return (
    <footer className="mac-desktop border-t border-black/[0.06] dark:border-white/[0.08] pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Widad Amrani — Full Stack Developer</p>
          <div className="flex items-center gap-4">
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#86198f] dark:hover:text-[#c084fc] transition-colors" aria-label="GitHub">
              <FiGithub className="w-5 h-5" />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#86198f] dark:hover:text-[#c084fc] transition-colors" aria-label="LinkedIn">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${contactDetails.email}`} className="hover:text-[#86198f] dark:hover:text-[#c084fc] transition-colors" aria-label="Email">
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
