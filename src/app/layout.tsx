// app/layout.tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import type { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Reynald Portfolio',
  description: 'Reynald Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}