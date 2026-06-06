export const projects = [
  {
    id: 'prestafreedom-backoffice',
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Chart.js", "FullCalendar", "Node-cron"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🏢",
    liveDemo: "https://admin.prestafreedom.com/dashboard",
    image: "/images/backofficeprestafreedom.png"
  },
  {
    id: 'prestafreedom-client',
    technologies: ["Next.js", "Supabase", "Jotai", "PayXpert", "Resend API", "Google Maps API"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼",
    liveDemo: "https://www.prestafreedom.com/",
    image: "/images/PrestaClient.jpg"
  },
  {
    id: 'maroc-fer',
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    gradient: "from-amber-500 to-orange-500",
    icon: "🚂",
    liveDemo: "https://marocfer.com/",
    image: "/images/marocfer.jpg"
  },
  {
    id: 'kgm-mobility',
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX"],
    gradient: "from-indigo-500 to-blue-500",
    icon: "🚗",
    liveDemo: "https://www.kg-mobility.ma/",
    image: "/images/KGM.jpg"
  },
  {
    id: 'exeed-maroc',
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX", "Responsive Design"],
    gradient: "from-slate-600 to-gray-800",
    icon: "🚙",
    liveDemo: "https://exeedmaroc.vercel.app/",
    image: "/images/Exeed.png"
  },
  {
    id: 'jac-motors',
    technologies: ["Next.js", "React", "Tailwind CSS", "Modern UI/UX", "Responsive Design"],
    gradient: "from-red-500 to-rose-600",
    icon: "🚘",
    liveDemo: "https://jacmotors.ma/fr",
    image: "/images/JAC.png"
  },
  {
    id: 'jumideal',
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Expo Image Picker", "React Navigation"],
    gradient: "from-green-500 to-emerald-500",
    icon: "📱",
    image: "/images/appJumiDeal.png",
    secondaryImage: "/images/appJumiDeal-scan.png"
  },
  {
    id: 'prestafreedom-mobile',
    technologies: ["React Native", "Expo Router", "Supabase", "RNEUI", "React Native Calendars"],
    gradient: "from-orange-500 to-red-500",
    icon: "📅",
  }
];

export function getProjectCopy(t, project) {
  return {
    title: t(`projects.items.${project.id}.title`),
    description: t(`projects.items.${project.id}.description`),
  };
}
