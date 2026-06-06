import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

export const metadata = {
  title: "Widad Amrani | Full Stack Developer",
  description: "Portfolio of Widad Amrani, a skilled Full Stack Developer specializing in Next.js, React, Node.js, and Supabase.",
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="description" content="Portfolio of Widad Amrani, a skilled Full Stack Developer specializing in Next.js, React, Node.js, and Supabase." />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');var l=localStorage.getItem('lang');if(l==='fr'||l==='de'||l==='en')document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${poppins.className} ${caveat.variable} mac-desktop text-gray-800 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
