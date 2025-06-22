import { Poppins } from "next/font/google";
import "./globals.css";
import { cookies, headers } from 'next/headers';
import clsx from 'clsx';
import ThemeProvider from '@/components/theme-provider'; // "use client"
import LangEffect from "@/components/ui/LangEffect";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: "Widad Amrani | Full Stack Developer",
  description: "Portfolio of Widad Amrani, a skilled Full Stack Developer specializing in Next.js, React, and Supabase.",
};

export default function RootLayout({ children }) {
  const cookieTheme = cookies().get('theme')?.value;     // "dark" | "light" | undefined
  const headerTheme = headers().get('sec-ch-prefers-color-scheme'); // "dark" | "light" | null
  const initialTheme =
    cookieTheme ?? (headerTheme === 'dark' ? 'dark' : 'light');

  return (
    <html
      lang="en"
      className={clsx('!scroll-smooth', initialTheme === 'dark' && 'dark')}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <LangEffect />
        <ThemeProvider defaultTheme={initialTheme} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
