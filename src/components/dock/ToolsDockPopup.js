"use client";

const toolCategories = [
  {
    title: 'Frontend',
    color: 'bg-orange-400',
    tools: ['JavaScript', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    color: 'bg-rose-400',
    tools: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Mobile',
    color: 'bg-emerald-400',
    tools: ['React Native', 'Expo', 'Mobile UI/UX'],
  },
  {
    title: 'DevOps',
    color: 'bg-purple-400',
    tools: ['Docker', 'Vercel', 'Git', 'CI/CD'],
  },
  {
    title: 'Databases',
    color: 'bg-blue-400',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'More',
    color: 'bg-gray-400',
    tools: ['GraphQL', 'OpenAI SDK', 'Postman', 'Agile', 'UI/UX'],
  },
];

export default function ToolsDockPopup() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/5 dark:border-white/10">
        <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-black/5 flex flex-col p-1 gap-0.5 shrink-0">
          <div className="h-2 bg-gray-200/60 dark:bg-gray-600/60 rounded-full" />
          <div className="flex-1 flex flex-wrap gap-0.5 items-center justify-center">
            {['bg-orange-400', 'bg-rose-400', 'bg-emerald-400', 'bg-purple-400', 'bg-blue-400', 'bg-gray-400'].map((c) => (
              <span key={c} className={`w-1.5 h-1.5 rounded-[1px] ${c}`} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">My Toolkit</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Technologies I ship with daily</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {toolCategories.map((cat) => (
          <div key={cat.title} className="mac-tools-card">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-3 h-3 rounded-sm ${cat.color} shadow-sm`} />
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.tools.map((tool) => (
                <span key={tool} className="mac-tools-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">Also comfortable with</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Responsive Design', 'Performance', 'Security', 'Testing', 'Microservices', 'Cloud'].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
