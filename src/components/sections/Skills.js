"use client";
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiDatabase, FiZap, FiSmartphone } from 'react-icons/fi';

const skills = {
  "Frontend Development": { 
    icon: FiCode, 
    list: ["JavaScript", "Next.js", "React.js", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
    color: "blue"
  },
  "Backend Development": { 
    icon: FiServer, 
    list: ["Node.js", "Express.js", "Edge Functions", "PostgreSQL", "TypeScript", "PHP"],
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  "APIs & Integrations": { 
    icon: FiCpu, 
    list: ["RESTful APIs", "GraphQL", "WebSocket"],
    gradient: "from-green-500 to-emerald-500",
    color: "green"
  },
  "DevOps & Tools": { 
    icon: FiZap, 
    list: ["Docker", "Vercel", "Ngrok", "Postman", "Git", "CI/CD"],
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  "Mobile Development": { 
    icon: FiSmartphone, 
    list: ["React Native", "Expo", "Mobile UI/UX"],
    gradient: "from-indigo-500 to-purple-500",
    color: "indigo"
  },
  "Database & Cloud": { 
    icon: FiDatabase, 
    list: ["Supabase", "PostgreSQL", "MySQL", "Cloud Services"],
    gradient: "from-teal-500 to-blue-500",
    color: "teal"
  },
};

const skillLevels = {
  "JavaScript": 95,
  "Next.js": 90,
  "React.js": 92,
  "React Native": 88,
  "Node.js": 85,
  "Supabase": 90,
  "Tailwind CSS": 95,
  "TypeScript": 80,
  "PostgreSQL": 85,
  "Docker": 75,
  "Git": 90,
  "GraphQL": 70,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional toolbox of technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, { icon: Icon, list, gradient, color }], index) => (
            <motion.div
              key={category}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                {/* Header with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6`}>
                  <Icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  {category}
                </h3>
                
                <ul className="space-y-3">
                  {list.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                    >
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill}</span>
                      {skillLevels[skill] && (
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skillLevels[skill]}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium w-8 text-right">
                            {skillLevels[skill]}%
                          </span>
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="gradient-text">Additional Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "UI/UX Design", "Responsive Design", "Performance Optimization", 
                "Security Best Practices", "Testing & Debugging", "Agile Methodologies",
                "API Design", "Microservices", "Cloud Deployment", "Version Control"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 font-medium border border-white/20 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 