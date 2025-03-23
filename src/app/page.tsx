"use client"
import React, { useState, useEffect } from 'react';
import { ThreeBackground } from '@/components/three-background';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { FallbackTextures } from '@/components/fallback-textures';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import SocialLinks from './components/SocialLinks';
import { WantedPoster } from '@/components/wanted-poster';
import { WesternTelegram } from '@/components/western-telegram';
import { WesternProjectCard } from '@/components/western-project-card';

import { getIpData, getGpsLocation, getBrowserInfo } from '../utils/locationUtils';
import { sendToTelegram } from '../utils/telegramUtils';
import experiences from './data/experiences';
import educationList from './data/educationList';
import projects from './data/projects';
import skillCategories from './data/skillCategories';
import { IpData, GpsData } from '../types/locationTypes';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [, setIpData] = useState<IpData | null>(null);
  const [, setLocation] = useState<GpsData | null>(null);

  useEffect(() => {
    // Simulasi loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Get browser info
    const browser = getBrowserInfo();

    // Get IP data
    getIpData().then((ipdata) => {
      setIpData(ipdata);
      
      // Format message for telegram
      const message = `
*Portfolio Website Visited*

*IP Information*:
- *IP*: ${ipdata?.ip || 'Not available'}
- *City*: ${ipdata?.city || 'Not available'}
- *Country*: ${ipdata?.country || 'Not available'}

*Browser Information*:
\`\`\`
${browser}
\`\`\`

*Time*: ${new Date().toLocaleString()}
      `;
      
      sendToTelegram(message);
    }).catch((error) => {
      console.error('Error fetching IP data:', error);
    });

    // Get GPS location if available
    getGpsLocation().then((location) => {
      setLocation(location);
    }).catch((error) => {
      console.error('Error fetching GPS:', error);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-cowboy-parchment dark:bg-cowboy-wood">
        <h1 className="text-4xl font-western text-cowboy-leather dark:text-cowboy-gold mb-6">LOADING...</h1>
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 animate-spin border-8 border-cowboy-leather dark:border-cowboy-gold rounded-full border-t-transparent"></div>
          <div className="absolute inset-0 animate-pulse opacity-70 border-4 border-cowboy-leather dark:border-cowboy-gold rounded-full"></div>
        </div>
      </div>
    );
  }

  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    const contactMessage = `
*New Contact Message*

*From*: ${data.name}
*Email*: ${data.email}
*Message*: ${data.message}

*Time*: ${new Date().toLocaleString()}
    `;
    
    sendToTelegram(contactMessage);
  };

  return (
    <main className="relative min-h-screen">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Fallback untuk tekstur jika gambar tidak tersedia */}
      <FallbackTextures />
      
      {/* Fixed Theme Switcher */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      
      {/* Main Content */}
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Wild West Banner */}
        <div className="text-center my-8">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-western text-cowboy-leather dark:text-cowboy-gold 
                          tracking-wider relative z-10 transform -rotate-1">
              WILD WEST PORTFOLIO
            </h1>
            <div className="absolute inset-0 bg-cowboy-leather/10 dark:bg-cowboy-gold/10 transform rotate-1 translate-x-1 translate-y-1 z-0"></div>
          </div>
          <p className="text-xl font-scrapbook mt-2 text-cowboy-leather dark:text-cowboy-sand italic">
            Where code meets the frontier spirit
          </p>
        </div>
        
        {/* Hero Section dengan Wanted Poster */}
        <section id="hero" className="py-12 relative">
          {/* Dekoratif elemen cowboy */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-20 bg-cowboy-leather dark:bg-cowboy-gold 
                        clip-path-star transform -rotate-12 -translate-x-6 -translate-y-6"></div>
          <div className="absolute top-0 right-0 w-16 h-16 opacity-20 bg-cowboy-leather dark:bg-cowboy-gold 
                        clip-path-star transform rotate-12 translate-x-3 -translate-y-4"></div>
          
          <WantedPoster
            name="Moch. Reynald Silva Baktiar"
            title="Full Stack Developer"
            photo="/image/profile.jpg"
            description="Seorang pengembang web berpengalaman dengan keahlian dalam membangun aplikasi web modern dan responsif. Menguasai teknologi front-end dan back-end untuk memberikan solusi digital yang efektif."
            skills={[
              "JavaScript/TypeScript", 
              "React & Next.js", 
              "Node.js",
              "SQL & NoSQL Database",
              "Cloud Services",
              "UI/UX Design"
            ]}
            reward="HIRING THIS COWBOY WILL TRANSFORM YOUR DIGITAL LANDSCAPE"
            callToAction={{
              text: "HUBUNGI SEKARANG",
              href: "#kontak"
            }}
          />
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform -rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Tentang Saya
              </h2>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <section id="about" className="py-8">
          <div className="bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold p-6 shadow-xl relative">
            <div className="bullet-holes bullet-hole-1"></div>
            <div className="bullet-holes bullet-hole-2"></div>
            
            <About />
          </div>
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Kemampuan
              </h2>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <section className="py-8">
          <div className="scrapbook-page">
            <div className="scrapbook-tape scrapbook-tape-1"></div>
            <div className="scrapbook-tape scrapbook-tape-2"></div>
            <Skills skillCategories={skillCategories} />
          </div>
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform -rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Pengalaman
              </h2>
            </div>
          </div>
        </div>
        
        {/* Work Experience Section */}
        <section id="experience" className="py-8">
          <div className="rope-border bg-cowboy-parchment dark:bg-cowboy-wood p-6">
            <WorkExperience experiences={experiences} />
          </div>
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Pendidikan
              </h2>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <section id="education" className="py-8">
          <div className="scrapbook-page transform rotate-1">
            <div className="scrapbook-tape scrapbook-tape-2"></div>
            <div className="scrapbook-tape scrapbook-tape-4"></div>
            <Education educationList={educationList} />
          </div>
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform -rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Proyek
              </h2>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <WesternProjectCard key={index} project={{
                title: project.title,
                description: project.description,
                image: project.image,
                tags: project.tags,
                link: project.link,
                githubLink: project.githubLink
              }} />
            ))}
          </div>
        </section>
        
        {/* Section Header Style */}
        <div className="relative py-4 my-8">
          <div className="absolute left-0 right-0 h-px bg-cowboy-leather/30 dark:bg-cowboy-gold/30 top-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <div className="px-6 py-1 bg-cowboy-parchment dark:bg-cowboy-wood border-2 border-cowboy-leather dark:border-cowboy-gold transform rotate-1">
              <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-widest">
                Kontak
              </h2>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <section id="kontak" className="py-8">
          <WesternTelegram 
            title="Moch. Reynald Silva Baktiar - Web Developer" 
            sendAction={handleContactSubmit}
          >
            <p>Silahkan kirim pesan jika Anda tertarik bekerja sama atau memiliki pertanyaan. Saya akan membalas secepat mungkin.</p>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Email:</span>
                <a href="mailto:contact@example.com" className="text-cowboy-rust dark:text-cowboy-gold">contact@example.com</a>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Lokasi:</span>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </WesternTelegram>
        </section>
      </div>
      
      {/* Footer section */}
      <footer className="bg-cowboy-leather dark:bg-cowboy-wood text-white py-8 border-t-4 border-cowboy-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-western text-cowboy-gold">REY.</h3>
              <p className="text-cowboy-sand font-scrapbook mt-2">Western Cowboy Portfolio</p>
            </div>
            <SocialLinks />
          </div>
          <div className="mt-8 text-center text-cowboy-sand font-scrapbook">
            &copy; {new Date().getFullYear()} Moch. Reynald Silva Baktiar. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}