import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

export const metadata: Metadata = {
  title: 'WeatherWise App | Next.js + TypeScript',
  description:
    'WeatherWise is a Next.js weather application built with TypeScript that allows users to check the current weather and forecast for any location.',
  manifest: '/site.webmanifest',
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    statusBarStyle: 'default',
    title: 'WeatherWise',
    capable: true,
  },
  openGraph: {
    title: 'WeatherWise App | Next.js + TypeScript',
    description:
      'WeatherWise is a Next.js weather application built with TypeScript that allows users to check the current weather and forecast for any location.',
    type: 'website',
    locale: 'en_US',
    url: 'https://weatherwise-app-next-ts.vercel.app/',
    images: [
      {
        url: 'https://weatherwise-app-next-ts.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WeatherWise App | Next.js + TypeScript',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
