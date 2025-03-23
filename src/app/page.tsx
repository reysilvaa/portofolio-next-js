"use client"

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WorkExperience from './components/sections/WorkExperience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
// import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Section from './components/ui/Section';
import SectionConnector from './components/ui/SectionConnector';
import MainLayout from './components/layout/MainLayout';
import { useVisitorTracking } from './hooks/useVisitorTracking';
import { useState } from 'react';

// Data imports
import experiences from './data/experiences';
import educationList from './data/educationList';
import projects from './data/projects';
import skillCategories from './data/skillCategories';
import testimonials from './data/testimonials';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  useVisitorTracking();

  const contactInfo = {
    email: "reynaldsilva123@gmail.com",
    phone: "+62 852 3215-2313",
    address: "Jl. Bauksit No 90C, Kel. Purwantoro, Kec. Blimbing, Kota Malang, Indonesia"
  };

  return (
    <MainLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      <div className="-space-y-4">
        <Section id="hero" maxWidth="7xl">
          <Hero />
        </Section>
        
        <SectionConnector />
        
        <Section id="about" maxWidth="4xl">
          <About />
        </Section>
        
        <SectionConnector />
        
        <Section id="skills" maxWidth="6xl" centered={false}>
          <Skills skillCategories={skillCategories} />
        </Section>
        
        <SectionConnector />
        
        <Section id="experience" maxWidth="6xl" centered={false}>
          <WorkExperience experiences={experiences} />
        </Section>
        
        <SectionConnector />
        
        <Section id="education" maxWidth="4xl">
          <Education educationList={educationList} />
        </Section>
        
        <SectionConnector />
        
        <Section id="projects" maxWidth="6xl" centered={false}>
          <Projects projects={projects} />
        </Section>
        
        {/* <SectionConnector />
        
        <Section id="testimonials" maxWidth="4xl">
          <Testimonials testimonials={testimonials} />
        </Section> */}
        
        <SectionConnector />
        
        <Section id="contact" maxWidth="6xl" centered={false}>
          <Contact contactInfo={contactInfo} />
        </Section>
      </div>
    </MainLayout>
  );
}