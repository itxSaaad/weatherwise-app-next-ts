import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeToggleBtn: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Set default value to false

  useEffect(() => {
    // Check the initial color scheme when the component mounts
    const initialColorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(initialColorScheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    // Update theme based on isDarkMode value
    if (isDarkMode) {
      document.documentElement.style.setProperty('--primary-color', '#cce5ff');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#ffffff'
      );
      document.documentElement.style.setProperty(
        '--foreground-color',
        '#333333'
      );
    } else {
      document.documentElement.style.setProperty('--primary-color', '#00004c');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#000021'
      );
      document.documentElement.style.setProperty(
        '--foreground-color',
        '#ffffff'
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
          <Image src="/images/moon.svg" alt="Moon" width={24} height={24} />
        ) : (
          <Image src="/images/sun.svg" alt="Sun" width={24} height={24} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggleBtn;
