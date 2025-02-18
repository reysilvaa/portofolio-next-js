// components/About.tsx
import Image from 'next/image';
import { JSX } from 'react';

export default function About(): JSX.Element {
  return (
    <div className="mb-24 mt-16" id="about">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-12 md:mb-0 mt-7">
          <div className="border-4 border-yellow-400 p-2">
            <Image
              src="/image/me.png"
              alt="About Reynald Silva"
              width={300}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-32">
          <h2 className="text-4xl font-bold mb-8">Tentang Saya</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Saya adalah seorang full-stack developer yang memulai perjalanan di dunia pemrograman sejak 2018. 
            Saat ini, saya sedang menempuh pendidikan di Politeknik Negeri Malang. 

            Saya memiliki keahlian dalam membangun aplikasi web modern dengan React, Bootstrap, NextJS, dan JavaScript di sisi frontend, 
            serta Node.js, PHP Native, dan Laravel di sisi backend. 
            Saya juga berpengalaman dalam pengembangan mobile dengan Flutter dan pengelolaan database menggunakan MySQL. 

            Selain itu, saya terbiasa melakukan deployment ke cloud (VPS) dengan Nginx dan Linux, 
            serta membangun REST API menggunakan Node.js dan Laravel. 
            Saya juga memiliki pengalaman dalam machine learning dengan Python dan mengerjakan proyek deep learning. 

            Tidak hanya itu, saya pernah mempelajari Odoo ERP dan aktif menggunakan Git serta GitHub dalam pengembangan proyek. 
            Saya selalu antusias untuk mempelajari teknologi baru dan berkomitmen untuk menciptakan solusi yang efisien dan elegan.
          </p>
        </div>
      </div>
    </div>
  );
}
