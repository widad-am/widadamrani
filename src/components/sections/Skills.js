"use client";
import { motion } from 'framer-motion';
import MacWidget from '@/components/ui/MacWidget';

const expertiseGroups = [
  { title: 'Frontend', skills: ['JavaScript', 'Next.js', 'React.js', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'PHP'] },
  { title: 'Mobile', skills: ['React Native', 'Expo', 'Mobile UI/UX'] },
  { title: 'APIs & Cloud', skills: ['RESTful APIs', 'GraphQL', 'Supabase', 'OpenAI SDK', 'WebSocket'] },
  { title: 'DevOps', skills: ['Docker', 'Vercel', 'Git', 'CI/CD', 'Postman'] },
  { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'] },
];

const extraSkills = [
  'UI/UX Design', 'Responsive Design', 'Performance Optimization',
  'Security Best Practices', 'Testing & Debugging', 'Agile Methodologies',
  'API Design', 'Microservices', 'Cloud Deployment', 'Version Control',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden mac-desktop">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-hand text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-2">My Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">Technologies I use to ship production-ready products.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {expertiseGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <MacWidget>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{group.title}</p>
                  <span className="mac-done-btn text-[10px] py-0.5">Done</span>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </MacWidget>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MacWidget>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Additional Expertise</p>
            <div className="flex flex-wrap gap-2">
              {extraSkills.map((skill) => (
                <span key={skill} className="workspace-pill">{skill}</span>
              ))}
            </div>
          </MacWidget>
        </motion.div>
      </div>
    </section>
  );
}
