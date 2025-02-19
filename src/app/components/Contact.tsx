// components/Contact.tsx
import React, { JSX } from 'react';

export default function Contact(): JSX.Element {
  return (
    <section className="mb-24" id="contact">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Kontak</h2>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Info Kontak</h3>
            <p className="text-gray-600 mb-6">Silahkan Hubungi saya .</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium">Posisi</h4>
                  <p className="text-gray-600">Jl. Bauksit No 90C, Kel. Purwantoro, Kec. Blimbing, Kota Malang, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">reynaldsilva123@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium">Telpon</h4>
                  <p className="text-gray-600">+62 852 3215-2313</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nama Anda</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Anda</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Judul Pesan</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Isi Pesan</label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit"
                className="bg-yellow-400 text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                Kirimkan ke Reynald Silva
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}