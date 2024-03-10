import Image from 'next/image';
import { useState } from 'react';

const ThemeToggleBtn: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    if (!isDarkMode) {
      document.documentElement.style.setProperty('--foreground-rgb', '0, 0, 0');
      document.documentElement.style.setProperty(
        '--background-start-rgb',
        '214, 219, 220'
      );
      document.documentElement.style.setProperty(
        '--background-end-rgb',
        '255, 255, 255'
      );
    } else {
      document.documentElement.style.setProperty(
        '--foreground-rgb',
        '255, 255, 255'
      );
      document.documentElement.style.setProperty(
        '--background-start-rgb',
        '0, 0, 0'
      );
      document.documentElement.style.setProperty(
        '--background-end-rgb',
        '0, 0, 0'
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-400 rounded-full p-1 transition-colors duration-300"
    >
      <span
        className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <Image src="/images/sun.svg" alt="Sun" width={24} height={24} />
        ) : (
          <Image src="/images/moon.svg" alt="Sun" width={24} height={24} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggleBtn;
