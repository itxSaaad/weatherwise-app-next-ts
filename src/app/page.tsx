'use client';

import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    const fetchWeather = () => {
      const position = localStorage.getItem('weatherData')
        ? JSON.parse(localStorage.getItem('weatherData') as string)
        : '';
      if (position !== '') {
        setWeatherData(position);
      } else {
        setError('Location not found');
      }
    };
    fetchWeather();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-6 sm:p-12 min-h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mt-8">
          Welcome to WeatherWise!
        </h1>
        <p className="text-lg sm:text-xl mt-4 w-2/3">
          WeatherWise is a Next.js weather application built with TypeScript
          that allows users to check the current weather and forecast for any
          location.
        </p>
        {weatherData ? (
          <p className="text-lg sm:text-xl text-blue-500 mt-4">
            Current Forecast for your location:{''}
            <span>
              {weatherData.location.name}, {weatherData.location.region},{' '}
              {weatherData.location.country}
            </span>
          </p>
        ) : error ? (
          <p className="text-lg sm:text-xl mt-4 text-red-600">
            {error}! Please Enter your location manually in the search bar.
          </p>
        ) : (
          <p className="text-lg sm:text-xl mt-4">Fetching location...</p>
        )}
      </div>
    </main>
  );
};

export default Home;
