import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
  description: "Portfolio of Widad Amrani, a skilled Full Stack Developer specializing in Next.js, React, and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${poppins.className} ${caveat.variable} mac-desktop text-gray-800 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
