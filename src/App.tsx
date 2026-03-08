// src/App.tsx
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    contact: contactRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, );

  const scrollToSection = (sectionId: string) => {
    sectionRefs[sectionId as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <main>
        <section id="home" ref={homeRef} className="pt-16">
          <Hero onCtaClick={() => scrollToSection('projects')} />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;



