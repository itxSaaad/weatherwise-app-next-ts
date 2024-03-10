import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-row justify-evenly items-center container mx-auto py-4 px-8 text-center border-t border-t-gray-800">
      <p>
        &copy; {new Date().getFullYear()} WeatherWise. All rights reserved.
        Created with ♥ by{' '}
        <a
          href="https://portfolio-itxsaaad.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Muhammad Saad
        </a>
      </p>
    </footer>
  );
}

export default Footer;
