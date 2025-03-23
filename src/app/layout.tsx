// app/layout.tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import type { Metadata } from 'next';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moch Reynald Silva Baktiar | Portofolio',
  description: 'Portofolio pribadi Moch Reynald Silva Baktiar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}