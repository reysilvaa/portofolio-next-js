import Link from 'next/link';
import { JSX } from 'react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-between items-center mb-16">
      <Link href="/" className="text-3xl font-bold text-yellow-400">Rey.</Link>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-yellow-400 font-medium">HOME</Link>
        <Link href="/#about" className="hover:text-yellow-400 font-medium">ABOUT</Link>
        <Link href="/#services" className="hover:text-yellow-400 font-medium">SERVICE</Link>
        <Link href="/#experience" className="hover:text-yellow-400 font-medium">PENGALAMAN</Link>
        <Link href="/resume" className="hover:text-yellow-400 font-medium">RESUME</Link>
        <Link href="/blog" className="hover:text-yellow-400 font-medium">BLOG</Link>
        <Link href="/#contact" className="hover:text-yellow-400 font-medium">CONTACT</Link>
      </div>
    </nav>
  );
}
