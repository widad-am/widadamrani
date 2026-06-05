"use client";
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi';
import MacWidget from '@/components/ui/MacWidget';

const contactDetails = {
  email: "Widad.amraniacs@gmail.com",
  phone: "+212 602769701",
  location: "Morocco",
  linkedin: "https://www.linkedin.com/in/widad-amrani-23266022b/",
  github: "https://github.com/widad-am",
};

const contactMethods = [
  {
    icon: FiMail,
    title: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone}`,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: contactDetails.location,
    href: "#",
    gradient: "from-purple-500 to-pink-500"
  }
];

const socialLinks = [
  {
    icon: FiLinkedin,
    href: contactDetails.linkedin,
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: FiGithub,
    href: contactDetails.github,
    label: "GitHub",
    gradient: "from-gray-700 to-gray-800"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden mac-desktop pb-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-hand text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-2">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Open to new projects, collaborations, and opportunities to build something meaningful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <MacWidget className="p-6" padding={false}>
              <div className="space-y-4 mb-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="workspace-file-row"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center shrink-0`}>
                      <method.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{method.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">Social</p>
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
            </MacWidget>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MacWidget className="p-6 sm:p-8" padding={false}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#86198f]/30 dark:focus:ring-[#c084fc]/30 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800/80 text-gray-800 dark:text-gray-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#86198f]/30 dark:focus:ring-[#c084fc]/30 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800/80 text-gray-800 dark:text-gray-100"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#86198f]/30 dark:focus:ring-[#c084fc]/30 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800/80 text-gray-800 dark:text-gray-100"
                    placeholder="What&apos;s this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#86198f]/30 dark:focus:ring-[#c084fc]/30 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-800/80 text-gray-800 dark:text-gray-100"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#86198f] text-white font-semibold rounded-xl hover:bg-[#701a7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="text-lg" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </MacWidget>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 