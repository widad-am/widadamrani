import Header from '@/components/ui/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
// import StylingGuide from '@/components/ui/StylingGuide';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        {/* Styling Guide - Comment out in production */}
        {/* <StylingGuide /> */}
      </main>
      <Footer />
    </div>
  );
}
