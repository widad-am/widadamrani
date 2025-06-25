"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const contactDetails = {
  linkedin: "https://www.linkedin.com/in/widad-amrani-23266022b/", // Placeholder
  github: "https://github.com/widad-am", // Placeholder
  email: "Widad.amraniacs@gmail.com"
};

const socialLinks = [
  {
    icon: FiGithub,
    href: contactDetails.github,
    label: "GitHub",
    gradient: "from-gray-700 to-gray-800"
  },
  {
    icon: FiLinkedin,
    href: contactDetails.linkedin,
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: FiMail,
    href: `mailto:${contactDetails.email}`,
    label: "Email",
    gradient: "from-purple-600 to-pink-600"
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 border-t border-gray-200 dark:border-gray-800">
      {/* Floating elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/10 dark:bg-purple-900/20 rounded-full animate-blob"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-blue-500/10 dark:bg-blue-900/20 rounded-full animate-blob animation-delay-2000"></div>
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Widad Amrani
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Full Stack Developer passionate about creating exceptional digital experiences and innovative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-glow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-600 dark:text-pink-400 font-medium">Email:</span><br />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-purple-600 dark:hover:text-pink-400 transition-colors">
                    {contactDetails.email}
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-600 dark:text-pink-400 font-medium">Phone:</span><br />
                  <a href="tel:+212602769701" className="hover:text-purple-600 dark:hover:text-pink-400 transition-colors">
                    +212 602769701
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-600 dark:text-pink-400 font-medium">Location:</span><br />
                  Morocco
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-800 mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              &copy; {new Date().getFullYear()} Widad Amrani. All rights reserved.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowUp className="text-sm" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
} 