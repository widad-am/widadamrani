'use client';

import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi';
import MacWindow from '@/components/ui/MacWindow';
import {
  contactDetails,
  contactMethodsMeta,
  socialLinksMeta,
} from '@/data/contact';

const iconMap = {
  email: FiMail,
  phone: FiPhone,
  location: FiMapPin,
  linkedin: FiLinkedin,
  github: FiGithub,
};

export default function ContactPopup({ isOpen, onClose }) {
  const contactMethods = contactMethodsMeta.map((meta) => {
    const value = contactDetails[meta.field];
    let href = '#';
    if (meta.hrefPrefix && meta.hrefKey) {
      href = `${meta.hrefPrefix}${contactDetails[meta.hrefKey]}`;
    }
    return {
      ...meta,
      value,
      href,
      icon: iconMap[meta.key],
    };
  });

  const socialLinks = socialLinksMeta.map((meta) => ({
    ...meta,
    href: contactDetails[meta.key],
    icon: iconMap[meta.key],
  }));

  return (
    <MacWindow isOpen={isOpen} onClose={onClose} title="Contact" maxWidth="max-w-4xl">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Open to new projects, collaborations, and opportunities to build something meaningful.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="workspace-file-row group"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center shrink-0`}
              >
                <method.icon className="text-white text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  {method.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
              </div>
            </a>
          ))}

          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold pt-2">
            Social
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white hover:scale-105 transition-transform`}
                aria-label={social.label}
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Send a Message
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="popup-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  className="mac-popup-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="popup-email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  className="mac-popup-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="popup-subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="popup-subject"
                name="subject"
                className="mac-popup-input"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="popup-message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="popup-message"
                name="message"
                rows={4}
                className="mac-popup-input resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="mac-popup-submit w-full">
              <FiSend className="text-lg" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </MacWindow>
  );
}
