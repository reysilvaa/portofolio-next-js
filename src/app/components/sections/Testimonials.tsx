"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { HiStar } from "react-icons/hi2";

// Mendefinisikan tipe data testimonial
type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
};

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeId, setActiveId] = useState(1);
  
  return (
    <motion.section 
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-28 scroll-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Testimoni" path="/testimonials" />
        
        <div className="mt-16">
          <div className="flex justify-center mb-10">
            <div className="flex space-x-4">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveId(testimonial.id)}
                  className={`relative overflow-hidden rounded-full border-2 transition-all duration-300 ${
                    activeId === testimonial.id ? 'border-accent-color scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover w-12 h-12"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeId === testimonial.id ? 1 : 0,
                  y: activeId === testimonial.id ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`text-center max-w-2xl mx-auto absolute inset-0 transition-opacity duration-500 ${
                  activeId === testimonial.id ? 'z-10' : 'z-0'
                }`}
              >
                <div className="retro-bg p-6 md:p-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiStar 
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                
                  <p className="text-gray-700 italic mb-6">&quot{testimonial.text}&quot</p>
                  
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer div to maintain height */}
            <div className="retro-bg p-6 md:p-10 opacity-0 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">{testimonials[0].text}</p>
              <div>
                <div className="font-bold">Placeholder</div>
                <div className="text-gray-600 text-sm">Role</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveId(testimonial.id)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeId === testimonial.id ? 'bg-accent-color scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="retro-divider mt-16">
          <span>TESTIMONI</span>
        </div>
      </div>
    </motion.section>
  );
} 