import MacMenuBar from '@/components/ui/MacMenuBar';
import MacDock from '@/components/ui/MacDock';
import Hero from '@/components/sections/Hero';
// import About from '@/components/sections/About';
// import Skills from '@/components/sections/Skills';
// import Projects from '@/components/sections/Projects';
// import Contact from '@/components/sections/Contact';
// import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <MacMenuBar />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      <MacDock />
      {/* <Footer /> */}
    </div>
  );
}
