import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/ui/Header";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: "Widad Amrani | Full Stack Developer",
  description: "Portfolio of Widad Amrani, a skilled Full Stack Developer specializing in Next.js, React, and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} bg-gray-50 text-gray-800`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
