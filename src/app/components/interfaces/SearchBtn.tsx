import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';

function SearchBtn() {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', query);
    try {
      if (suggestions.length === 0) {
        setErrorMessage('No cities found. Please Enter any other city!');
        return;
      }
      await fetchWeather(query);
    } catch (error: any) {
      if (error.message === 'City not found') {
        // Show error message to the user (e.g., using toast notification)
        setErrorMessage('City not found. Please Enter any other city!');
        // You can display the error message visually using libraries like React Toastify
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setQuery(userInput);

    const newSuggestions = ['New York', 'Los Angeles', 'Chicago'].filter(
      (city) => city.toLowerCase().includes(userInput.toLowerCase())
    );
    setSuggestions(newSuggestions);
    setShowSuggestions(true);
    setErrorMessage(''); // Reset error message on input change
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    fetchWeather(suggestion);
  };

  const fetchWeather = async (location: string) => {
    // Replace the console log with your API call
    console.log('Fetching weather for:', location);
  };

  return (
    <form
      className="relative flex flex-row items-center justify-center mb-4 sm:mb-0 w-full sm:w-2/5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Enter City, Zip Code, or Country..."
        value={query}
        onChange={handleChange}
        className={`flex items-center justify-between w-full p-3 bg-gray-50 bg-opacity-40 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 backdrop-blur-sm`}
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-2"
      >
        <Image src="/images/search.svg" alt="Search" width={24} height={24} />
      </button>
      {query && showSuggestions && (
        <ul
          className={`absolute top-full left-0 z-10 bg-gray-50 bg-opacity-40 border border-gray-300 rounded-lg mt-1 w-full backdrop-blur-sm dark:bg-gray-700 dark:bg-opacity-40 dark:border-gray-600`}
        >
          {errorMessage ? (
            <li className="px-4 py-2 text-red-200 dark:text-red-400 bg-white rounded-lg">
              {errorMessage}
            </li>
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  index === 0 ? 'rounded-t-lg' : ''
                } ${
                  index === suggestions.length - 1 ? 'rounded-b-lg' : ''
                } hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  );
}

export default SearchBtn;
