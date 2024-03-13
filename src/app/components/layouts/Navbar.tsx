'use client';

import Image from 'next/image';
import { FC } from 'react';

import Link from 'next/link';
import SearchBtn from '../interfaces/SearchBtn';
import ThemeToggleBtn from '../interfaces/ThemeToggleBtn';

const Navbar: FC = () => {
  return (
    <nav className="w-full h-fit flex flex-col sm:flex-row items-center justify-evenly py-4 px-8 text-center border-b border-gray-800">
      <Link href="/">
        <div className="flex flex-row items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <Image
            src="/android-chrome-192x192.png"
            alt="WeatherWise Logo"
            width={40}
            height={40}
          />
          <h1 className="pl-2 text-2xl font-bold">WeatherWise</h1>
        </div>
      </Link>
      <SearchBtn />
      <div className="hidden sm:flex flex-row items-center justify-end">
        <ThemeToggleBtn />
      </div>
    </nav>
  );
};

export default Navbar;
