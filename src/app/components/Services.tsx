
// components/Services.tsx
import React, { JSX } from 'react';

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: string; // FontAwesome icon class
};

interface ServicesProps {
  services: ServiceItem[];
}

export default function Services({ services }: ServicesProps): JSX.Element {
  return (
    <section className="mb-24" id="services">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-yellow-400 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className={`${service.icon} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}