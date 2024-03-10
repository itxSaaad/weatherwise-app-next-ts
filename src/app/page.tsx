'use client';

import { useEffect, useState } from 'react';

const getLocation = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

const Home: React.FC = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getLocation();
        setLocation(position);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchLocation();
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
        {location ? (
          <p className="text-lg sm:text-xl text-blue-500 mt-4">
            Your current latitude is{' '}
            <span className="font-bold">{location.coords.latitude}</span> and
            longitude is{' '}
            <span className="font-bold">{location.coords.longitude}</span>.
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
