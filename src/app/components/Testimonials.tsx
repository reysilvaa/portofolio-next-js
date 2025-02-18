// components/Testimonials.tsx
import React, { JSX } from 'react';
import Image from 'next/image';

type TestimonialItem = {
  id: number;
  text: string;
  name: string;
  position: string;
  imageUrl: string;
};

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: TestimonialsProps): JSX.Element {
  return (
    <section className="mb-24" id="testimonials">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
                <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
            </div>
        ))}
      </div>
    </section>
  );
}
