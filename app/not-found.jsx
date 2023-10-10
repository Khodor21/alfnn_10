import Link from "next/link";
import React from "react";
import Dental from "./components/assets/not-found.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <main
      className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="english"
    >
      <div className="text-center">
        <p className="text-base font-semibold text-main">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <Image
          src={Dental}
          alt="error page"
          width={200}
          height={200}
          className="mx-auto my-4"
        />
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
