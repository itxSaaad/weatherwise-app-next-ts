import Image from 'next/image';
import Link from 'next/link';

function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center p-6 sm:p-12 min-h-screen">
      <Image
        src="/images/broken-link.svg"
        alt="Broken Link Icon"
        width={192}
        height={192}
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl mt-4 text-center">
        The page you are looking for does not exist!
      </p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Go to Homepage
      </Link>
    </main>
  );
}

export default ErrorPage;
