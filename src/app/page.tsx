// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

//data
import experiences from './data/experiences';
import educationList from './data/educationList';
import projects from './data/projects';
import skillCategories from './data/skillCategories';
import testimonials from './data/testimonials';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Navbar />
        <Hero />
        <About />
        <Skills skillCategories={skillCategories} />
        <WorkExperience experiences={experiences} />
        <Education educationList={educationList} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </div>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Reynald Silva. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
