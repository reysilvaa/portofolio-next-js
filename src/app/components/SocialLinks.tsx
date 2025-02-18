
// components/SocialLinks.tsx
import Link from 'next/link';
import { JSX } from 'react';

export default function SocialLinks(): JSX.Element {
  return (
    <div className="flex space-x-4">
      <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition">
        <i className="fab fa-linkedin-in"></i>
      </Link>
      <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition">
        <i className="fab fa-behance"></i>
      </Link>
    </div>
  );
}