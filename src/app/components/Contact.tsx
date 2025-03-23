"use client";
import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact(): JSX.Element {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="relative">
      {/* Background texture */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat"
             style={{ 
               backgroundImage: "url('/textures/old-paper.jpg')",
               backgroundSize: "500px"
             }}>
        </div>
      </div>
      
      <div className="relative z-10">
        {/* Judul bergaya surat telegram */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold p-6 relative transform rotate-1 shadow-xl">
            <h2 className="text-3xl font-western text-cowboy-leather dark:text-cowboy-gold tracking-wide uppercase">
              Kirim Telegram
            </h2>
            <div className="western-divider w-48 h-2 mt-2 mx-auto"></div>
            
            {/* Stempel */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-cowboy-rust dark:bg-cowboy-gold rounded-full border-4 border-cowboy-leather dark:border-cowboy-wood flex items-center justify-center transform rotate-12">
              <span className="font-western text-white dark:text-cowboy-wood text-xs text-center leading-tight">
                URGENT<br/>TELEGRAM
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Konten utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Informasi kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold p-6 transform -rotate-1 shadow-lg">
              <h3 className="text-xl font-western text-cowboy-leather dark:text-cowboy-gold mb-6 tracking-wide">KANTOR TELEGRAPH</h3>
              <p className="font-scrapbook text-cowboy-leather/80 dark:text-cowboy-sand mb-8">Kirim telegram kepada saya melalui kantor telegraph terdekat!</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-cowboy-leather dark:bg-cowboy-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white dark:text-cowboy-wood text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-western text-cowboy-leather dark:text-cowboy-gold">LOKASI</h4>
                    <p className="font-scrapbook text-cowboy-leather/80 dark:text-cowboy-sand mt-1">Jl. Bauksit No 90C, Kel. Purwantoro, Kec. Blimbing, Kota Malang, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-cowboy-leather dark:bg-cowboy-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white dark:text-cowboy-wood text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-western text-cowboy-leather dark:text-cowboy-gold">TELEGRAM</h4>
                    <p className="font-scrapbook text-cowboy-leather/80 dark:text-cowboy-sand mt-1">reynaldsilva123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-cowboy-leather dark:bg-cowboy-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white dark:text-cowboy-wood text-xl">☎️</span>
                  </div>
                  <div>
                    <h4 className="font-western text-cowboy-leather dark:text-cowboy-gold">TELEGRAM CEPAT</h4>
                    <p className="font-scrapbook text-cowboy-leather/80 dark:text-cowboy-sand mt-1">+62 852 3215-2313</p>
                  </div>
                </div>
              </div>
              
              {/* Stamp effect */}
              <div className="mt-10 flex justify-end">
                <div className="w-24 h-24 opacity-30 bg-cowboy-rust dark:bg-cowboy-gold rounded-full border-2 border-dashed border-cowboy-leather dark:border-cowboy-wood flex items-center justify-center transform rotate-12">
                  <span className="font-western text-white dark:text-cowboy-wood text-xs text-center">
                    WILD WEST<br/>TELEGRAPH CO.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulir kontak */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-cowboy-parchment dark:bg-cowboy-wood border-4 border-cowboy-leather dark:border-cowboy-gold p-6 transform rotate-1 shadow-lg relative"
            >
              {/* Form header with telegram style */}
              <div className="border-b-2 border-cowboy-leather/30 dark:border-cowboy-gold/30 pb-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-western text-cowboy-leather dark:text-cowboy-gold">WESTERN UNION</span>
                  <span className="font-scrapbook text-cowboy-leather/70 dark:text-cowboy-gold/70">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-2">NAMA PENGIRIM</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cowboy-parchment/70 dark:bg-cowboy-wood/70 
                              border-2 border-cowboy-leather/50 dark:border-cowboy-gold/50 
                              font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                              focus:border-cowboy-leather dark:focus:border-cowboy-gold focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-2">ALAMAT TELEGRAPH</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formState.email}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-cowboy-parchment/70 dark:bg-cowboy-wood/70 
                              border-2 border-cowboy-leather/50 dark:border-cowboy-gold/50 
                              font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                              focus:border-cowboy-leather dark:focus:border-cowboy-gold focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-2">SUBJEK TELEGRAM</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-cowboy-parchment/70 dark:bg-cowboy-wood/70 
                            border-2 border-cowboy-leather/50 dark:border-cowboy-gold/50 
                            font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                            focus:border-cowboy-leather dark:focus:border-cowboy-gold focus:outline-none"
                  placeholder="Tawaran Pekerjaan"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-2">ISI TELEGRAM</label>
                <textarea 
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-cowboy-parchment/70 dark:bg-cowboy-wood/70 
                            border-2 border-cowboy-leather/50 dark:border-cowboy-gold/50 
                            font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                            focus:border-cowboy-leather dark:focus:border-cowboy-gold focus:outline-none"
                  placeholder="Tuliskan pesan anda disini..."
                ></textarea>
              </div>
              
              <div className="text-center relative">
                <button 
                  type="submit"
                  className="bg-cowboy-leather dark:bg-cowboy-gold text-white dark:text-cowboy-wood 
                            font-western tracking-wide py-3 px-8 text-xl
                            border-2 border-cowboy-leather dark:border-cowboy-gold
                            shadow-md hover:bg-cowboy-rust hover:border-cowboy-rust
                            transition-all duration-300 transform hover:scale-105 active:scale-95
                            uppercase"
                >
                  Kirim Telegram
                </button>
                
                {/* Bullet hole decoration */}
                <div className="absolute top-3 right-3 bullet-holes bullet-hole-1"></div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}