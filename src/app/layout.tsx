import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        url: 'https://weatherwise-app-next-ts.vercel.app//og-image.png',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
