// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Navbar />
        <Hero />
        <About />
      </div>
    </main>
  );
}