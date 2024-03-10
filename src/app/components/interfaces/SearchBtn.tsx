import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';

function SearchBtn() {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
        className="flex items-center justify-between w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-2"
      >
        <Image src="/images/search.svg" alt="Search" width={24} height={24} />
      </button>
    </form>
  );
}

export default SearchBtn;
