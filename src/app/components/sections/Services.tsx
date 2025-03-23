"use client"

import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout, FiServer } from 'react-icons/fi';
import { MouseEvent, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

// Data layanan
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Pembuatan website responsif dengan fokus pada pengalaman pengguna, performa, dan SEO. Menggunakan teknologi modern seperti React, Next.js, dan TailwindCSS.",
    icon: <FiCode className="w-6 h-6" />,
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Content Management Systems"
    ]
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Pengembangan aplikasi mobile untuk Android dan iOS dengan pendekatan cross-platform untuk efisiensi biaya dan waktu pengembangan.",
    icon: <FiSmartphone className="w-6 h-6" />,
    features: [
      "React Native Apps",
      "Flutter Development",
      "Native Integration",
      "App Maintenance"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Desain antarmuka yang intuitif dan menarik dengan fokus pada kegunaan, aksesibilitas, dan konsistensi visual untuk meningkatkan retensi pengguna.",
    icon: <FiLayout className="w-6 h-6" />,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "User Testing"
    ]
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Pembuatan sistem backend yang scalable, aman, dan efisien dengan implementasi API RESTful dan integrasi database untuk mendukung aplikasi front-end.",
    icon: <FiServer className="w-6 h-6" />,
    features: [
      "API Development",
      "Database Design",
      "Server Management",
      "Authentication Systems"
    ]
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>, id: number) => {
    setActiveId(id);
  };
  
  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setActiveId(null);
  };

  return (
    <motion.section 
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Layanan" path="/services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`retro-bg p-6 md:p-8 cursor-pointer transition-transform duration-300 ${activeId === service.id ? 'scale-[1.02]' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(e, service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start">
                <div className="rounded-full bg-accent-color/10 p-3 text-accent-color">
                  {service.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  
                  <div className={`grid grid-cols-2 gap-2 mt-4 transition-opacity duration-300 ${activeId === service.id ? 'opacity-100' : 'opacity-70'}`}>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 