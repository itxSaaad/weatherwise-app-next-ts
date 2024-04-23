'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_WEATHERAPI_API_KEY;
  // console.log('API_KEY:', API_KEY);

  useEffect(() => {
    const location = localStorage.getItem('location');
    if (location) {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
        )
        .then((response) => {
          localStorage.setItem('weatherData', JSON.stringify(response.data));
          setWeatherData(response.data);
          console.log('Fetching weather for:', response.data.location.name);
          console.log('Weather data:', response.data);
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    } else {
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            await axios
              .get(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
              )
              .then((response) => {
                localStorage.setItem(
                  'weatherData',
                  JSON.stringify(response.data)
                );
                setWeatherData(response.data);
                console.log(
                  'Fetching weather for:',
                  response.data.location.name
                );
                console.log('Weather data:', response.data);
              })
              .catch((error) => {
                console.error('An error occurred:', error);
              });
          });
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      };

      getLocation();
    }
  }, [API_KEY]);

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
