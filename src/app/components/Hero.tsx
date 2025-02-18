
// components/Hero.tsx
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { JSX } from 'react';

export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-24">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <p className="text-yellow-400 font-semibold mb-4">Selamat Datang !</p>
        <h1 className="text-5xl font-bold mb-6">I'am Moch Reynald Silva Baktiar</h1>
        <p className="text-gray-600 mb-8">
            Aku ganteng dan aku programmer. Aku percaya bahwa ketampanan dan logika bisa berjalan seiringan. 
            Dengan ketampanan ini, semoga bug segan mendekat dan kode tetap elegan. 
            Namun sayangnya, ketampanan tak bisa di-commit ke Git, sehingga pull request tetap butuh review. 
            Andai pesona bisa jadi dependency, pasti build selalu sukses tanpa error. 
            Meski begitu, aku tetap bersandar pada logika, karena seindah apapun wajah, 
            hanya kode yang rapi yang bisa membuat hati tenang saat deploy.
        </p>

        <SocialLinks />
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-80 h-80 bg-yellow-400 rounded-full absolute -z-10"></div>
        <Image
          src="/profile-picture.png"
          alt="Moch. Reynald Silva Baktiar"
          width={400}
          height={500}
          className="relative z-10"
        />
      </div>
    </div>
  );
}
